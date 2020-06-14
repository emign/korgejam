package com.snakegame.actors

import com.snakegame.map.CollisionChecker
import com.snakegame.resources.Resources
import com.soywiz.korge.atlas.readAtlas
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.bitmap.BitmapSlice
import com.soywiz.korim.bitmap.BmpSlice
import com.soywiz.korio.file.std.resourcesVfs

class Apple(bitmap:BmpSlice, val collisionChecker: CollisionChecker) : Image(bitmap) {
    init {
        spawn()
        smoothing=false
    }

    fun spawn() {
        position(collisionChecker.getRandomSpawnPoint())
    }
}

suspend fun Container.apple(views: Views, collisionChecker: CollisionChecker) {
    val snakeAtlas = Resources.snakeAtlas
    val appleTile = snakeAtlas["Apple_02.png"]

    addChild(Apple(appleTile, collisionChecker).apply { smoothing = false })
}
