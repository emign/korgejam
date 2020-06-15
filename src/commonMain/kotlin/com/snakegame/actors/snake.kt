package com.snakegame.actors

import com.snakegame.CURVES
import com.snakegame.MILLISECONDS_PER_FRAME
import com.snakegame.TILE_SIZE
import com.snakegame.extensions.toBool
import com.snakegame.gameplay.currentGameState
import com.snakegame.input.*
import com.snakegame.map.CollisionChecker
import com.snakegame.resources.Resources
import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.kmem.unsetBits
import com.soywiz.korev.Key
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korge.input.onKeyUp
import com.soywiz.korge.time.timeout
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korim.font.BitmapFont
import com.soywiz.korma.geom.Point


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
        var width:Int = 32,
        var updateBodyParts: (MutableList<SnakeBodyPart>)->Unit = {}
) {

    val body = mutableListOf<SnakeBodyPart>()
    val head by lazy { body[0] }
    var lastDirection = direction

    lateinit var bocadilloSmall: Image
    lateinit var bocadilloBig: Image

    var cinematicMode = false
    var goRight = false

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

    fun warp(x:Int, y:Int, newDirection:Direction){
        body.forEach {
            it.x = x.toDouble()
            it.xpos = x.toDouble()
            it.lastX = x.toDouble()
            it.y = y.toDouble()
            it.ypos = y.toDouble()
            it.lastY = y.toDouble()
            it.direction = newDirection
        }
        direction = newDirection
        lastDirection = newDirection
        Resources.levelWarp.play()
    }
}

enum class MovementMode { SNAKE, PACMAN, MARIO }

suspend fun Container.snake(views: Views, pos: Point, skin:SnakeSkin, collisionChecker: CollisionChecker, font: BitmapFont, movementMode:MovementMode = MovementMode.SNAKE, onDied:()->Unit, onItemEaten: ()->Unit, nextLevel: ()->Unit):Snake {
    val snakeAtlas = Resources.snakeAtlas
    val headTile = snakeAtlas[skin.headTile]
    val bodyTile = snakeAtlas[skin.bodyTile]
    val bodyFatTile = snakeAtlas[skin.bodyFatTile]
    val tailTile = snakeAtlas[skin.tailTile]
    val turnTile = snakeAtlas[skin.turnTile]
    val turnTileDR_LU = snakeAtlas[skin.turnTileDR_LU]
    val turnTileRD_UL = snakeAtlas[skin.turnTileRD_UL]
    val turnTileRU_DL = snakeAtlas[skin.turnTileRU_DL]
    val turnTileUR_LD = snakeAtlas[skin.turnTileUR_LD]
    val eatingHeadTile = snakeAtlas[skin.eatingHeadTile]

    val initialX = pos.x * 32.0
    val initialY = pos.y * 32.0

    var warpEnabled = true

    val snake = Snake(initialX, initialY, 2)

    var key = 0

    //onKeyDown { key = key.setBits(getButtonPressed(it)) }
    onKeyDown { key = getButtonPressed(it) }
    onKeyUp { key = key.unsetBits(getButtonPressed(it)) }


    container {

        val bodyParts = mutableListOf<Image>()

        val snakeContainer = container {
            bodyParts.addAll(listOf(
                    image(tailTile).apply { smoothing = false },
                    image(bodyTile).apply { smoothing = false },
                    image(headTile).apply { smoothing = false }
            ).reversed())
        }

        val snakeCurvesContainer = container {

        }

        val bocadilloSmall = image(snakeAtlas["bocadillo_02.png"])
        bocadilloSmall.addChild(text("!?", 16.0, color = Colors.BLACK, font = font).centerXOn(bocadilloSmall))
        bocadilloSmall.alpha = 0.0
        val bocadilloBig = image(snakeAtlas["bocadillo_01.png"])
        bocadilloBig.scale(1.5, 1.5)
        bocadilloBig.addChild(text("Grrrr...", 10.0, color = Colors.BLACK, font = font).position(5, 5))
        bocadilloBig.alpha = 0.0

        val explotionAnim = mutableListOf(
                image(snakeAtlas["Explosion1_01.png"]),
                image(snakeAtlas["Explosion1_02.png"]),
                image(snakeAtlas["Explosion1_03.png"]),
                image(snakeAtlas["Explosion1_04.png"]),
                image(snakeAtlas["Explosion1_05.png"]),
                image(snakeAtlas["Explosion1_06.png"]),
                image(snakeAtlas["Explosion1_07.png"]),
                image(snakeAtlas["Explosion1_08.png"])
        )

        explotionAnim.forEach {
            it.alpha = 0.0
        }

        fun Image.updatePart(bodyPart: SnakeBodyPart): Image{
            x = bodyPart.xpos + TILE_SIZE / 2
            y = bodyPart.ypos + TILE_SIZE / 2

            /*image.scaleX = when(bodyPart.direction) {
            Direction.RIGHT ->  1.0
            Direction.LEFT -> 1.0
            Direction.UP -> 1.0
            Direction.DOWN -> 1.0
        }*/
            scaleY = when (bodyPart.direction) {
                Direction.RIGHT -> 1.0
                Direction.LEFT -> 1.0
                Direction.UP -> -1.0
                Direction.DOWN -> 1.0
            }
            rotationDegrees = when (bodyPart.direction) {
                Direction.RIGHT -> 270.0
                Direction.LEFT -> 90.0
                Direction.UP -> 0.0
                Direction.DOWN -> 0.0
            }
            anchor(0.5, 0.5)

            return this
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

        fun updateBodyParts(body: MutableList<SnakeBodyPart>){
            bodyParts.forEachIndexed { index, image ->
                val bodyPart = body[index]
                image.updatePart(bodyPart)
            }
        }
        snake.updateBodyParts = ::updateBodyParts
        snake.bocadilloSmall = bocadilloSmall
        snake.bocadilloBig = bocadilloBig

        val head = bodyParts.first()

        fun addBodyPart() {
            val body = snake.body
            val lastPart = body[body.size - 1]
            body.add(SnakeBodyPart(lastPart.x, lastPart.y))
            val newPart = Image(bodyTile).apply { smoothing = false }
            snakeContainer.addChildAt(newPart, 1)
            bodyParts.add(1, newPart)
        }

        var frames  =  0.0
        val speed  = 4.0
        val fatBodies = mutableListOf<Pair<Double, Image>>()

        fun eat(){
            val part = snake.body.get(1)
            fatBodies.add(Pair(8.0 * (bodyParts.size - 1), image(bodyFatTile).apply {
                smoothing = false
            }.updatePart(part).position(head.pos)))
        }

        onKeyDown {
            if (it.key == Key.SPACE) {
                addBodyPart()
            }
        }

        var newDirection = snake.direction
        var lockInput = false

        val dotsToGrow = 5
        var remainingToGrow = dotsToGrow
        var ghostsAndPacmanCounter = 5
        fun enemyPacmanEaten() {
            ghostsAndPacmanCounter--
            if(ghostsAndPacmanCounter <= 0) {
                warpEnabled = false
                val arrow = image(snakeAtlas["arrow.png"])
                        .position(23 * TILE_SIZE - 8,10* TILE_SIZE - 8)
                var time = 0

                arrow.addFixedUpdater(MILLISECONDS_PER_FRAME){
                    if(currentGameState.paused) return@addFixedUpdater
                    time++
                    if(time>10) {
                        time = 0
                        visible = !visible
                    }
                    if(snake.body.last().x>800) {
                        currentGameState.paused = true
                        nextLevel()
                    }
                }
            }
        }

        head.onCollision {
            if(it is Lario || it is Koopa){
                Resources.appleSound.play()
                head.bitmap = eatingHeadTile
                timeout(MILLISECONDS_PER_FRAME * speed){
                    head.bitmap = headTile
                }
                timeout(MILLISECONDS_PER_FRAME * speed) {
                    eat()
                }
                addBodyPart()
                it.positionY(1000)
            }
            if (it is Apple) {
                Resources.appleSound.play()
                it.spawn()
                head.bitmap = eatingHeadTile
                timeout(MILLISECONDS_PER_FRAME * speed){
                    head.bitmap = headTile
                }
                timeout(MILLISECONDS_PER_FRAME * speed) {
                    eat()
                }
                addBodyPart()
                onItemEaten()
            }
            if (it is Dot) {
                Resources.appleSound.play()
                it.die()
                head.bitmap = eatingHeadTile
                timeout(MILLISECONDS_PER_FRAME * speed){
                    head.bitmap = headTile
                }
                remainingToGrow--
                if(remainingToGrow==0) {
                    remainingToGrow = dotsToGrow
                    addBodyPart()
                }
                onItemEaten()
            }
            if (it is Ghost) {
                Resources.pacmanDead.play()
                it.die()
                head.bitmap = eatingHeadTile
                timeout(MILLISECONDS_PER_FRAME * speed){
                    head.bitmap = headTile
                }
                timeout(MILLISECONDS_PER_FRAME * speed) {
                    eat()
                }
                addBodyPart()
                onItemEaten()
                enemyPacmanEaten()
            }
            if (it is Pacoman) {
                Resources.pacmanDead.play()
                it.die()
                head.bitmap = eatingHeadTile
                timeout(MILLISECONDS_PER_FRAME * speed){
                    head.bitmap = headTile
                }
                timeout(MILLISECONDS_PER_FRAME * speed) {
                    eat()
                }
                addBodyPart()
                onItemEaten()
                enemyPacmanEaten()
            }
            if (it is Coin) {
                Resources.appleSound.play()
                it.die()
                head.bitmap = eatingHeadTile
                timeout(MILLISECONDS_PER_FRAME * speed){
                    head.bitmap = headTile
                }
                addBodyPart()
                onItemEaten()
            }
        }

        var goingToNextLevel = false

        addFixedUpdater(MILLISECONDS_PER_FRAME, false) {
            if (currentGameState.paused) return@addFixedUpdater

            //addUpdater { it ->
            //    val deltaTime:Double = if (it.milliseconds == 0.0) 0.0 else (it.milliseconds / 16.666666)

            fatBodies.toList().forEachIndexed {index, it->
                if (it.first <= 0.0)
                    it.second.alpha = 0.0
                else fatBodies[index] = Pair(it.first - 1, it.second)
            }

            if (lockInput == false) {
                newDirection = when (key) {
                    BUTTON_RIGHT -> Direction.RIGHT
                    BUTTON_LEFT -> Direction.LEFT
                    BUTTON_UP -> Direction.UP
                    BUTTON_DOWN -> Direction.DOWN
                    else -> newDirection
                }
                if ((key and (BUTTON_RIGHT or BUTTON_LEFT or BUTTON_UP or BUTTON_DOWN)).toBool()) lockInput = true
            }

            fun disableWalkingBackwards() {
                val disable = when (newDirection) {
                    Direction.LEFT -> snake.direction == Direction.RIGHT
                    Direction.RIGHT -> snake.direction == Direction.LEFT
                    Direction.UP -> snake.direction == Direction.DOWN
                    Direction.DOWN -> snake.direction == Direction.UP
                }
                if (disable) newDirection = snake.direction
            }

            fun disableWarpWalking() {
                if(snake.head.x < 0 && newDirection != Direction.LEFT){
                    newDirection = Direction.RIGHT
                }
                if(snake.head.x> 800 - TILE_SIZE && newDirection != Direction.RIGHT){
                    newDirection = Direction.LEFT
                }
            }

            val hideIndexes = mutableListOf<Int>()
            val freezeIndexes = mutableListOf<Int>()
            val duplicateIndexes = mutableListOf<Int>()
            val curveIndexes = mutableListOf<Int>()

            fun paintCurves() {
                val positions = snake.body.map {
                    Point(it.x / TILE_SIZE, it.y / TILE_SIZE)
                }
                val curves = mutableListOf<Pair<CURVES,Point>>()


                positions.forEachIndexed { index, it ->
                    fun addIndexes() {
                        curveIndexes.add(index+1)
                        hideIndexes.add(index+1)
                        freezeIndexes.add(index)
                        duplicateIndexes.add(index+2)
                    }

                    if(index>=positions.lastIndex-1) return@forEachIndexed
                    if(index>0) {
                        val next = positions[index+1]
                        if (it.x == next.x) { //Vertical
                            val next2 = positions[index+2]
                            if(it.x < next2.x){ //Vertical left
                                addIndexes()
                                if(it.y<next2.y)
                                    curves.add(Pair(CURVES.LU, next)) //LU
                                else
                                    curves.add(Pair(CURVES.LD, next)) //LD
                            } else if(it.x > next2.x) { //Vertical right
                                addIndexes()
                                if(it.y<next2.y)
                                    curves.add(Pair(CURVES.RU, next))//RU
                                else
                                    curves.add(Pair(CURVES.RD, next))//RD
                            }
                        } else if (it.y == next.y) { //Horizontal
                            val next2 = positions[index+2]
                            if(it.y < next2.y){ //Horizontal UP
                                addIndexes()
                                if(it.x<next2.x)
                                    curves.add(Pair(CURVES.UL, next))//!
                                else
                                    curves.add(Pair(CURVES.UR, next))
                            } else if(it.y > next2.y) { //Horizontal DOWN
                                addIndexes()
                                if(it.x<next2.x)
                                    curves.add(Pair(CURVES.DL, next))
                                else
                                    curves.add(Pair(CURVES.DR, next))
                            }
                        }
                    }
                }
                snakeCurvesContainer.removeChildren()
                curves.forEach {
                    val tile = when(it.first) {
                        CURVES.DR, CURVES.LU -> turnTileDR_LU
                        CURVES.RD, CURVES.UL -> turnTileRD_UL
                        CURVES.RU, CURVES.DL -> turnTileRU_DL
                        CURVES.UR, CURVES.LD -> turnTileUR_LD
                        else -> headTile
                    }

                    snakeCurvesContainer.addChild(
                            image(tile).apply {
                                smoothing = false
                                position(it.second * TILE_SIZE)
                            }
                    )
                }

            }

            when (movementMode) {
                MovementMode.SNAKE -> {
                    disableWalkingBackwards()
                    if (!snake.cinematicMode || snake.goRight)
                        frames += speed // * deltaTime
                    if (frames >= TILE_SIZE) {
                        lockInput = false
                        if (!snake.cinematicMode || snake.goRight)
                            frames = 0.0
                        snake.lastDirection = snake.direction
                        if(snake.goRight)
                            snake.direction = Direction.RIGHT
                        else
                            snake.direction = newDirection

                        if (!snake.cinematicMode || snake.goRight)
                            snake.move()

                        collisionChecker.checkCollision(snake.head.x, snake.head.y) {
                            if(snake.goRight) {
                                if(!goingToNextLevel) {
                                    goingToNextLevel = true
                                    Resources.explosion.play()
                                    val explotionPos = Point(snake.head.x, snake.head.y)

                                    explotionAnim.forEachIndexed { index, image ->
                                        timeout(100.milliseconds * (index + 1)) {
                                            image.position(explotionPos + Point(0, -10))
                                            image.alpha = 1.0
                                        }
                                    }

                                    timeout(3.seconds) {
                                        nextLevel()
                                    }
                                }
                            } else {
                                onDied()
                            }
                        }

                        if (snake.colides()) onDied()

                    } else {
                        snake.interpolate(frames / TILE_SIZE)
                    }

                    paintCurves()


                }
                MovementMode.PACMAN -> {
                    disableWalkingBackwards()
                    disableWarpWalking()

                    frames += speed // * deltaTime

                    if (collisionChecker.colides(
                                    snake.head.x + newDirection.deltaX() * TILE_SIZE,
                                    snake.head.y + newDirection.deltaY() * TILE_SIZE)) {
                        lockInput = false
                        newDirection = snake.direction
                    }

                    if (frames >= TILE_SIZE) {
                        lockInput = false

                        snake.lastDirection = snake.direction
                        snake.direction = newDirection

                        if (!collisionChecker.colides(
                                        snake.head.x + newDirection.deltaX() * TILE_SIZE,
                                        snake.head.y + newDirection.deltaY() * TILE_SIZE)) {
                            snake.move()
                            frames = 0.0
                        }

                        if (snake.colides()) onDied()

                    } else {
                        snake.interpolate(frames / TILE_SIZE)
                    }


                    val tail = snake.body.last()
                    if (snake.head.x < -TILE_SIZE && tail.x < -TILE_SIZE) {
                        snake.warp(800, 10 * TILE_SIZE, Direction.LEFT)
                    }
                    if (warpEnabled && snake.head.x>800 && tail.x > 800) {
                        snake.warp(-TILE_SIZE, 10 * TILE_SIZE, Direction.RIGHT)
                    }

                    paintCurves()

                }
                MovementMode.MARIO -> {
                    frames += speed // * deltaTime

                    //CheckGround
                    val onGround = snake.body.any {
                        collisionChecker.colides(it.x, it.y + TILE_SIZE)
                    }

                    if (!onGround) {
                        newDirection = Direction.DOWN
                    }


                    if (collisionChecker.colides(
                                    snake.head.x + newDirection.deltaX() * TILE_SIZE,
                                    snake.head.y + newDirection.deltaY() * TILE_SIZE)) {
                        lockInput = false
                        newDirection = snake.direction
                    }

                    if (frames >= TILE_SIZE) {
                        lockInput = false

                        snake.lastDirection = snake.direction
                        if(snake.goRight)
                            snake.direction = Direction.RIGHT
                        else
                            snake.direction = newDirection

                        if (!collisionChecker.colides(
                                        snake.head.x + newDirection.deltaX() * TILE_SIZE,
                                        snake.head.y + newDirection.deltaY() * TILE_SIZE)) {
                            snake.move()
                            frames = 0.0
                        }
                    } else {
                        snake.interpolate(frames / TILE_SIZE)
                    }
                    paintCurves()
                }
            }

            bocadilloSmall.position(head.pos + Point(15, -40))
            bocadilloBig.position(head.pos + Point(15, -55))

            if (!snake.cinematicMode || snake.goRight) {
                updateBodyParts(snake.body)


                bodyParts.forEach {
                    it.visible = true
                }
                freezeIndexes.filter{!curveIndexes.contains(it)}.forEach {
                    bodyParts[it].x = snake.body[it].x + 16
                    bodyParts[it].y = snake.body[it].y + 16
                }
                duplicateIndexes.filter{!curveIndexes.contains(it)}.forEach {

                    val kdddd = bodyParts[it].clone()
                    kdddd.x = snake.body[it].x + 16
                    kdddd.y = snake.body[it].y + 16
                    snakeCurvesContainer.addChild(kdddd

                            /*image(bodyParts[it].texture).apply {
                                smoothing = false
                                position(
                                        snake.body[it].x + 16,
                                        snake.body[it].y + 16
                                )
                                rotation(bodyParts[it].rotation)
                                scale = bodyParts[it].scale
                            }*/
                    )
                }
                hideIndexes.forEach {
                    bodyParts[it].visible=false
                }
            }
        }
    }
    return snake
}
