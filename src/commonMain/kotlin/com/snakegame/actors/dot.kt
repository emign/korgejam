package com.snakegame.actors

import com.snakegame.resources.Resources
import com.soywiz.korge.atlas.readAtlas
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.Image
import com.soywiz.korge.view.Views
import com.soywiz.korge.view.position
import com.soywiz.korim.bitmap.BmpSlice
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.Point

class Dot(bitmap: BmpSlice) : Image(bitmap) {
    init {
        smoothing=false
    }

    fun die() {
        removeFromParent()
    }
}

suspend fun Container.dot(views: Views, point:Point) {
    val snakeAtlas = Resources.snakeAtlas
    val appleTile = snakeAtlas["PacoMan_Dot.png"]

    addChild(Dot(appleTile).apply {
        position(point.x+8, point.y+8)
        smoothing = false
    })
}

