package com.snakegame.actors

import com.soywiz.korge.atlas.readAtlas
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.bitmap.BitmapSlice
import com.soywiz.korio.file.std.resourcesVfs

class Apple(bitmap:BitmapSlice<Bitmap>) : Image(bitmap) {
    init {
        spawn()
    }

    fun spawn() {
        x = (20..700).random().toDouble()
        y = (100..500).random().toDouble()
    }
}

suspend fun Container.apple(views: Views) {
    val snakeAtlas = resourcesVfs["snake.atlas.json"].readAtlas(views)
    val appleTile = snakeAtlas["apple.png"] as BitmapSlice<Bitmap>

    addChild(Apple(appleTile))
}
