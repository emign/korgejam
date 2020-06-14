package com.snakegame.resources

import com.soywiz.korge.atlas.Atlas
import com.soywiz.korge.atlas.readAtlas
import com.soywiz.korge.view.Views
import com.soywiz.korim.font.BitmapFont
import com.soywiz.korim.font.Font
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korio.file.std.resourcesVfs

class Resources(val views: Views) {
    companion object{
        lateinit var snakeAtlas:Atlas
        lateinit var font: BitmapFont

        private var loaded = false
    }

    suspend fun loadAll() {
        if(loaded) return
        loaded = true
        snakeAtlas = resourcesVfs["snake.atlas.json"].readAtlas(views)
        font = resourcesVfs["texts/I-pixel-u.fnt"].readBitmapFont()
    }
}

