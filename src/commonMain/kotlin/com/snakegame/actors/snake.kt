package com.snakegame.actors

import com.snakegame.MILLISECONDS_PER_FRAME
import com.snakegame.TILE_SIZE
import com.snakegame.extensions.toBool
import com.snakegame.gameplay.currentGameState
import com.snakegame.input.*
import com.snakegame.map.CollisionChecker
import com.snakegame.resources.Resources
import com.soywiz.klock.seconds
import com.soywiz.kmem.unsetBits
import com.soywiz.korev.Key
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korge.input.onKeyUp
import com.soywiz.korge.time.delay
import com.soywiz.korge.time.timeout
import com.soywiz.korge.time.wait
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.hide
import com.soywiz.korge.tween.show
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korim.font.BitmapFont
import com.soywiz.korim.format.readNativeImage
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.Point
import kotlin.coroutines.CoroutineContext
import kotlin.coroutines.coroutineContext


data class SnakeBodyPart (
        var x: Double,
        var y: Double,
        var xpos:Double = x,
        var ypos:Double = y,
        var lastX:Double = x,
        var lastY:Double = y,
        var direction: Direction = Direction.RIGHT
)
enum class Direction {
    UP,
    RIGHT,
    DOWN,
    LEFT;

    fun deltaX(): Int {
        return when (this) {
            LEFT -> -1
            RIGHT -> 1
            else -> 0
        }
    }

    fun deltaY(): Int {
        return when (this) {
            UP -> -1;
            DOWN -> 1;
            else -> 0;
        }
    }
}

class Snake(
        startX: Double,
        startY: Double,
        numBodyParts:Int,
        var direction: Direction = Direction.RIGHT,
        var width:Int = 32
) {

    val body = mutableListOf<SnakeBodyPart>()
    val head by lazy { body[0] }
    var lastDirection = direction

    var lastPosX = startX
    var lastPosY = startY

    lateinit var bocadilloSmall: Image
    lateinit var bocadilloBig: Image


    init {
        (0..numBodyParts).forEach {
            body += SnakeBodyPart(
                    x = startX - direction.deltaX() * it * width,
                    y = startY - direction.deltaY() * it * width
            )
        }
    }

    fun move() {
        head.direction = direction

        for (i in body.size - 1 downTo 1) {
            val current = body[i]
            val (x, y) = body[i - 1]

            val previous = body[i - 1]
            var direction = direction

            if (previous.x == current.x && previous.y>current.y) {
                current.direction = Direction.DOWN
            } else if (previous.x == current.x && previous.y < current.y) {
                current.direction = Direction.UP
            } else if (previous.x < current.x && previous.y == current.y) {
                current.direction = Direction.LEFT
            } else if (previous.x > current.x && previous.y==current.y) {
                current.direction = Direction.RIGHT
            }



            current.lastX = current.x
            current.lastY = current.y
            current.x = x
            current.y = y
            //current.direction = direction
        }

        head.lastX = head.x
        head.lastY = head.y

        head.x = head.x + direction.deltaX() * width
        head.y = head.y + direction.deltaY() * width

        body.forEach {
            it.xpos = it.lastX
            it.ypos = it.lastY
        }

    }

    fun interpolate(delta:Double){
        fun lerp(a:Double, b:Double, f:Double)=  a + f * (b - a)

        body.forEach {
            it.xpos = lerp(it.lastX, it.x, delta)
            it.ypos = lerp(it.lastY, it.y, delta)
        }
    }

    fun colides():Boolean {
        body.forEach {
            if (head!=it && head.x == it.x && head.y == it.y){
                return true
            }
        }
        return false
    }
}

enum class MovementMode { SNAKE, PACMAN, MARIO }

suspend fun Container.snake(views: Views, pos: Point, skin:SnakeSkin, collisionChecker: CollisionChecker, font: BitmapFont, movementMode:MovementMode = MovementMode.SNAKE, onDied:()->Unit, onItemEaten: ()->Unit):Snake {
    val snakeAtlas = Resources.snakeAtlas
    val headTile = snakeAtlas[skin.headTile]
    val bodyTile = snakeAtlas[skin.bodyTile]
    val tailTile = snakeAtlas[skin.tailTile]

    val initialX = pos.x * 32.0
    val initialY = pos.y * 32.0
    val snake = Snake(initialX, initialY, 2)

    var key = 0

    //onKeyDown { key = key.setBits(getButtonPressed(it)) }
    onKeyDown { key = getButtonPressed(it) }
    onKeyUp { key = key.unsetBits(getButtonPressed(it)) }


    container {
        val bodyParts = mutableListOf(
                image(headTile).apply { smoothing = false },
                image(bodyTile).apply { smoothing = false },
                image(tailTile).apply { smoothing = false }
        )

        val bocadilloSmall = image(snakeAtlas["bocadillo_02.png"])
        bocadilloSmall.addChild(text("!?", 16.0, color = Colors.BLACK, font = font).centerXOn(bocadilloSmall))
        //bocadilloSmall.hide(0.seconds)
        val bocadilloBig = image(snakeAtlas["bocadillo_01.png"])
        bocadilloBig.scale(1.5, 1.5)
        bocadilloBig.addChild(text("Grrrr...", 10.0, color = Colors.BLACK, font = font).position(5, 5))
        //bocadilloBig.hide(0.seconds)

        snake.bocadilloSmall = bocadilloSmall
        snake.bocadilloBig = bocadilloBig

        val head = bodyParts.first()

        fun addBodyPart() {
            val body = snake.body
            val lastPart = body[body.size - 1]
            body.add(SnakeBodyPart(lastPart.x, lastPart.y))
            bodyParts.last().bitmap = bodyTile
            bodyParts.add(image(tailTile).apply { smoothing = false })
        }

        onKeyDown {
            if (it.key == Key.SPACE) {
                addBodyPart()
            }
        }

        var frames  =  0.0
        val speed  = 4.0

        var newDirection = snake.direction
        var lockInput = false



        head.onCollision {
            if (it is Apple) {
                it.spawn()
                addBodyPart()
                onItemEaten()
            }
            if (it is Dot) {
                it.die()
                onItemEaten()
            }
        }

        addFixedUpdater(MILLISECONDS_PER_FRAME, false) {
            if(currentGameState.paused) {
                //println("GAME IS PAUSERDDD")
                return@addFixedUpdater
            }
        //addUpdater { it ->
        //    val deltaTime:Double = if (it.milliseconds == 0.0) 0.0 else (it.milliseconds / 16.666666)

            if(lockInput == false ) {
                newDirection = when (key) {
                    BUTTON_RIGHT -> Direction.RIGHT
                    BUTTON_LEFT -> Direction.LEFT
                    BUTTON_UP -> Direction.UP
                    BUTTON_DOWN -> Direction.DOWN
                    else -> newDirection
                }
                if((key and (BUTTON_RIGHT or BUTTON_LEFT or BUTTON_UP or BUTTON_DOWN)).toBool()) lockInput = true
            }

            fun disableWalkingBackwards(){
                val disable = when(newDirection) {
                    Direction.LEFT -> snake.direction==Direction.RIGHT
                    Direction.RIGHT -> snake.direction==Direction.LEFT
                    Direction.UP -> snake.direction==Direction.DOWN
                    Direction.DOWN -> snake.direction==Direction.UP
                }
                if (disable) newDirection = snake.direction
            }

            when(movementMode){
                MovementMode.SNAKE -> {
                    disableWalkingBackwards()
                    frames += speed // * deltaTime
                    if(frames >= TILE_SIZE ) {
                        lockInput = false
                        frames = 0.0
                        snake.lastDirection = snake.direction
                        snake.direction = newDirection
                        snake.move()

                        collisionChecker.checkCollision(snake.head.x, snake.head.y) {
                            onDied()
                        }

                        if (snake.colides()) onDied()

                    } else {
                        snake.interpolate(frames / TILE_SIZE)
                    }
                }
                MovementMode.PACMAN -> {
                    disableWalkingBackwards()
                    frames += speed // * deltaTime

                    if(collisionChecker.colides(
                                    snake.head.x + newDirection.deltaX()* TILE_SIZE,
                                    snake.head.y + newDirection.deltaY()* TILE_SIZE)) {
                        lockInput = false
                        newDirection = snake.direction
                    }

                    if (frames >= TILE_SIZE) {
                        lockInput = false

                        snake.lastDirection = snake.direction
                        snake.direction = newDirection

                        if(!collisionChecker.colides(
                                        snake.head.x + newDirection.deltaX() * TILE_SIZE,
                                        snake.head.y + newDirection.deltaY() * TILE_SIZE)) {
                            snake.move()
                            frames = 0.0
                        }
                    } else {
                        snake.interpolate(frames / TILE_SIZE)
                    }
                }
                MovementMode.MARIO -> {
                    frames += speed // * deltaTime

                    //CheckGround
                    val onGround = snake.body.any{
                        collisionChecker.colides(it.x, it.y + TILE_SIZE)
                    }

                    if(!onGround) {
                        newDirection = Direction.DOWN
                    }


                    if(collisionChecker.colides(
                                    snake.head.x + newDirection.deltaX()* TILE_SIZE,
                                    snake.head.y + newDirection.deltaY()* TILE_SIZE)) {
                        lockInput = false
                        newDirection = snake.direction
                    }

                    if (frames >= TILE_SIZE) {
                        lockInput = false

                        snake.lastDirection = snake.direction
                        snake.direction = newDirection

                        if(!collisionChecker.colides(
                                        snake.head.x + newDirection.deltaX() * TILE_SIZE,
                                        snake.head.y + newDirection.deltaY() * TILE_SIZE)) {
                            snake.move()
                            frames = 0.0
                        }
                    } else {
                        snake.interpolate(frames / TILE_SIZE)
                    }
                }
            }

            bocadilloSmall.position(head.pos + Point(15, -40))
            bocadilloBig.position(head.pos + Point(15, -55))

            bodyParts.forEachIndexed { index, image ->
                val bodyPart = snake.body[index]
                image.x = bodyPart.xpos + TILE_SIZE/2
                image.y = bodyPart.ypos + TILE_SIZE/2

                /*image.scaleX = when(bodyPart.direction) {
                    Direction.RIGHT ->  1.0
                    Direction.LEFT -> 1.0
                    Direction.UP -> 1.0
                    Direction.DOWN -> 1.0
                }*/
                image.scaleY = when(bodyPart.direction) {
                    Direction.RIGHT ->  1.0
                    Direction.LEFT -> 1.0
                    Direction.UP -> -1.0
                    Direction.DOWN -> 1.0
                }
                image.rotationDegrees = when(bodyPart.direction) {
                    Direction.RIGHT ->  270.0
                    Direction.LEFT -> 90.0
                    Direction.UP -> 0.0
                    Direction.DOWN -> 0.0
                }
                image.anchor(0.5, 0.5)
                /*image.anchor(when(bodyPart.direction) {
                    Direction.RIGHT ->  0.5
                    Direction.LEFT -> 0.5
                    Direction.UP -> 0.5
                    Direction.DOWN -> 0.5
                }, when(bodyPart.direction) {
                    Direction.RIGHT ->  0.5
                    Direction.LEFT -> 0.5
                    Direction.UP -> 0.5
                    Direction.DOWN -> 0.5
                })*/
            }
        }
    }
    return snake
}
