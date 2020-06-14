package com.snakegame.actors

import com.snakegame.MILLISECONDS_PER_FRAME
import com.snakegame.TILE_SIZE
import com.snakegame.map.CollisionChecker
import com.snakegame.resources.Resources
import com.soywiz.kmem.toIntFloor
import com.soywiz.korge.tiled.TiledMapView
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.BmpSlice

class Ghost(bitmap:BmpSlice, val collisionChecker: CollisionChecker) : Image(bitmap) {
    init {
        spawn()
        smoothing=false
    }

    fun spawn() {
        position(collisionChecker.getRandomSpawnPoint())
    }
}

suspend fun Container.ghost(views: Views, collisionChecker: CollisionChecker, ghostType:Int) {
    val snakeAtlas = Resources.snakeAtlas
    val appleTile = snakeAtlas["Ghost_0$ghostType.png"]

    val ghost = Ghost(appleTile, collisionChecker).apply { smoothing = false }
    addChild(ghost)
    
    fun getRandomDirection() = Direction.values().random()

    var direction = getRandomDirection()

    fun Ghost.move() {
        x += direction.deltaX()
        y += direction.deltaY()
    }

    ghost.addFixedUpdater(MILLISECONDS_PER_FRAME) {
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
            Direction.DOWN -> 1
        }

        if (!collisionChecker.colides((x + m * TILE_SIZE) ,
                        (y + n * TILE_SIZE))){
           move()
        } else {
            direction = getRandomDirection()
        }
    }
}
