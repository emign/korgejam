package com.snakegame.actors

import com.snakegame.MILLISECONDS_PER_FRAME
import com.snakegame.TILE_SIZE
import com.snakegame.gameplay.currentGameState
import com.snakegame.map.CollisionChecker
import com.snakegame.resources.Resources
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.BmpSlice


class Koopa(bitmap: BmpSlice) : Image(bitmap) {
    init {
        smoothing=false
    }

    fun die() {
        removeFromParent()
    }
}

suspend fun Container.koopa(collisionChecker: CollisionChecker): Koopa {
    val snakeAtlas = Resources.snakeAtlas
    val appleTile = snakeAtlas["Gumba_01.png"]

    val koopa = Koopa(appleTile).apply { smoothing = false }
    addChild(koopa)
    val image2 = image(snakeAtlas["Gumba_02.png"])

    fun getRandomDirection() = listOf(Direction.RIGHT, Direction.LEFT).random()

    var direction = getRandomDirection()

    fun Koopa.move() {
        x += direction.deltaX()
        //y += direction.deltaY()

       // if(x<0 - TILE_SIZE) x = 800.0
        //if(x>800) x = 0.0 - TILE_SIZE
    }

    //var lastTileX = x.toInt() / TILE_SIZE
    //var lastTileY = y.toInt() / TILE_SIZE

    var frames = 0
    image2.visible = false
    koopa.addFixedUpdater(MILLISECONDS_PER_FRAME) {
        if (currentGameState.paused) return@addFixedUpdater

        image2.position(koopa.pos)
        frames++
        if(frames % 16 == 0){
            koopa.visible = !koopa.visible
            image2.visible = !image2.visible
        }
        /*if(lastTileX != x.toInt() / TILE_SIZE || lastTileY != y.toInt()/ TILE_SIZE) {
            lastTileX = x.toInt() / TILE_SIZE
            lastTileY = y.toInt() / TILE_SIZE
            direction = getRandomDirection()
        }*/
        val m = when(direction){
            Direction.LEFT -> 0
            Direction.RIGHT -> 1
            Direction.UP -> 0
            Direction.DOWN -> 0
        }
        val n = when(direction){
            Direction.LEFT -> 0
            Direction.RIGHT -> 0
            Direction.UP -> 0
            Direction.DOWN -> 0
        }

        if (!collisionChecker.colides((x + m * TILE_SIZE) ,
                        (y + n * TILE_SIZE))){
            move()
        } else {
            direction = getRandomDirection()
        }
    }

    return koopa
}