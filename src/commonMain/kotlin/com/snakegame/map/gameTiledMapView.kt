package com.snakegame.map

import com.soywiz.korge.tiled.TiledMapView
import com.soywiz.korge.tiled.readTiledMap
import com.soywiz.korge.tiled.tiledMapView
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.image
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.resourcesVfs


suspend fun Container.tiledMap(level:Int): TiledMapView {
    val background = resourcesVfs["level$level/background.png"].readBitmap()
    image(background)
    val tiledMap = resourcesVfs["level$level/map.tmx"].readTiledMap()
    return tiledMapView(tiledMap)
}