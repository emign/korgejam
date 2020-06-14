package com.snakegame.actors

import com.snakegame.MILLISECONDS_PER_FRAME
import com.snakegame.TILE_SIZE
import com.snakegame.map.CollisionChecker
import com.snakegame.resources.Resources
import com.soywiz.kmem.bit
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.BmpSlice

class Pacoman(bitmap:BmpSlice, val collisionChecker: CollisionChecker) : Image(bitmap) {
    init {
        spawn()
        smoothing=false
    }

    fun spawn() {
        position(collisionChecker.getRandomSpawnPoint())
    }

    fun die() {
        removeFromParent()
    }
}

suspend fun Container.pacoman(collisionChecker: CollisionChecker) {
    val snakeAtlas = Resources.snakeAtlas
    val frame1 = snakeAtlas["PacoMan_01.png"]
    val frame2 = snakeAtlas["PacoMan_02.png"]
    val frames = listOf(frame1, frame2)

    val pacoman = Pacoman(frame1, collisionChecker).apply { smoothing = false }
    addChild(container { addChild(pacoman) }.position(16,16) )
    
    fun getRandomDirection() = Direction.values().random()

    var direction = getRandomDirection()

    fun Pacoman.move() {
        val speed = 2
        x += direction.deltaX() * speed
        y += direction.deltaY() * speed

        if(x<0 - TILE_SIZE) x = 800.0
        if(x>800) x = 0.0 - TILE_SIZE
    }

    var animDelay = 0

    pacoman.onCollision {
        if (it is Dot) {
            it.die()
        }
    }

    pacoman.addFixedUpdater(MILLISECONDS_PER_FRAME) {
        animDelay++
        if(animDelay>4) {
            animDelay = 0
            bitmap = if(bitmap == frame1) frame2 else frame1
        }

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

        scaleX = when(direction) {
            Direction.RIGHT ->  1.0
            Direction.LEFT -> -1.0
            Direction.UP -> 1.0
            Direction.DOWN -> 1.0
        }
        rotationDegrees = when(direction) {
            Direction.RIGHT ->  0.0
            Direction.LEFT -> 0.0
            Direction.UP -> 270.0
            Direction.DOWN -> 90.0
        }
        anchor(0.5, 0.5)


        if (!collisionChecker.colides((x + m * TILE_SIZE) ,
                        (y + n * TILE_SIZE))){
           move()
        } else {
            direction = getRandomDirection()
        }
    }
}
