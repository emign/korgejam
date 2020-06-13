package com.snakegame.actors

import com.snakegame.extensions.toBool
import com.snakegame.input.*
import com.soywiz.kmem.setBits
import com.soywiz.kmem.unsetBits
import com.soywiz.korge.atlas.readAtlas
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korge.input.onKeyUp
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.Views
import com.soywiz.korge.view.container
import com.soywiz.korge.view.image
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


suspend fun Container.snake(views: Views) {
    val snakeAtlas = resourcesVfs["snake.atlas.json"].readAtlas(views)
    val head = snakeAtlas["head.png"].texture as BitmapSlice<Bitmap>
    val body = snakeAtlas["body.png"].texture as BitmapSlice<Bitmap>
    val tail = snakeAtlas["tail.png"].texture as BitmapSlice<Bitmap>

    val initialX = 100.0
    val initialY = 100.0
    val snake = Snake(initialX, initialY, 5)

    var key = 0

    //onKeyDown { key = key.setBits(getButtonPressed(it)) }
    onKeyDown { key = getButtonPressed(it) }
    onKeyUp { key = key.unsetBits(getButtonPressed(it)) }


    container {
        val bodyParts = listOf(
                image(head),
                image(body),
                image(body),
                image(body),
                image(body),
                image(tail)
        )

        var frames  =  0
        var newDirection = snake.direction
        var lockInput = false

        addUpdatable {
            val scale = if (it == 0) 0.0 else (it / 16.666666)

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

            frames++

            if(frames >= 32) {
                lockInput = false
                frames = 0
                snake.lastDirection = snake.direction
                snake.direction = newDirection
                snake.move()
            } else {
                snake.interpolate(frames / 32.0)
            }

            bodyParts.forEachIndexed { index, image ->
                image.x = snake.body[index].xpos
                image.y = snake.body[index].ypos
            }
        }
    }
}
