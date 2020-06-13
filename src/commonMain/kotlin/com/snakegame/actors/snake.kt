package com.snakegame.actors

import com.snakegame.MILLISECONDS_PER_FRAME
import com.snakegame.TILE_SIZE
import com.snakegame.extensions.toBool
import com.snakegame.input.*
import com.snakegame.map.CollisionChecker
import com.soywiz.kmem.unsetBits
import com.soywiz.korev.Key
import com.soywiz.korge.atlas.readAtlas
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korge.input.onKeyUp
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.bitmap.BitmapSlice
import com.soywiz.korio.file.std.resourcesVfs


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


    init {
        (0..numBodyParts).forEach {
            body += SnakeBodyPart(
                    x = startX - direction.deltaX() * it * width,
                    y = startY - direction.deltaY() * it * width
            )
        }
    }

    fun move() {
        for (i in body.size - 1 downTo 1) {
            val current = body[i]
            val (x, y) = body[i - 1]
            current.lastX = current.x
            current.lastY = current.y
            current.x = x
            current.y = y
        }

        head.lastX = head.x
        head.lastY = head.y

        head.x = head.x + direction.deltaX() * width
        head.y = head.y + direction.deltaY() * width
    }

    fun interpolate(delta:Double){
        fun lerp(a:Double, b:Double, f:Double)=  a + f * (b - a)

        body.forEach {
            it.xpos = lerp(it.lastX, it.x, delta)
            it.ypos = lerp(it.lastY, it.y, delta)
        }
    }
}

enum class MovementMode { SNAKE, PACMAN }

suspend fun Container.snake(views: Views, collisionChecker: CollisionChecker, movementMode:MovementMode = MovementMode.SNAKE) {
    val snakeAtlas = resourcesVfs["snake.atlas.json"].readAtlas(views)
    val headTile = snakeAtlas["snake_head_01.png"] as BitmapSlice<Bitmap>
    val bodyTile = snakeAtlas["snake_body.png"] as BitmapSlice<Bitmap>
    val tailTile = snakeAtlas["snake_body_tail.png"] as BitmapSlice<Bitmap>

    val initialX = 2 * 32.0
    val initialY = 1 * 32.0
    val snake = Snake(initialX, initialY, 2)

    var key = 0

    //onKeyDown { key = key.setBits(getButtonPressed(it)) }
    onKeyDown { key = getButtonPressed(it) }
    onKeyUp { key = key.unsetBits(getButtonPressed(it)) }


    container {
        val bodyParts = mutableListOf(
                image(headTile),
                image(bodyTile),
                image(tailTile)
        )

        val head = bodyParts.first()

        fun addBodyPart() {
            val body = snake.body
            val lastPart = body[body.size - 1]
            body.add(SnakeBodyPart(lastPart.x, lastPart.y))
            bodyParts.last().bitmap = bodyTile
            bodyParts.add(image(tailTile))
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
            }
        }

        addFixedUpdater(MILLISECONDS_PER_FRAME, false) {
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

            when(movementMode){
                MovementMode.SNAKE -> {
                    frames += speed // * deltaTime
                    if(frames >= TILE_SIZE) {
                        lockInput = false
                        frames = 0.0
                        snake.lastDirection = snake.direction
                        snake.direction = newDirection
                        snake.move()

                        collisionChecker.checkCollision(snake.head.x, snake.head.y) {
                            snake.head.x = 100.0
                            snake.head.y = 100.0
                        }
                    } else {
                        snake.interpolate(frames / TILE_SIZE)
                    }
                }
                MovementMode.PACMAN -> {
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
            }


            bodyParts.forEachIndexed { index, image ->
                image.x = snake.body[index].xpos
                image.y = snake.body[index].ypos
            }
        }
    }
}
