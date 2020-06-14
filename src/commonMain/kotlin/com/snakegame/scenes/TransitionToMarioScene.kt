package com.snakegame.scenes

import com.snakegame.gameplay.currentGameState
import com.snakegame.map.tiledMap
import com.soywiz.klock.seconds
import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.time.wait
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.hide
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.*
import com.soywiz.korim.color.RGBA
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs


class TransitionToMarioScene() : Scene() {

    override suspend fun Container.sceneInit() {
        solidRect(1000.0, 1000.0, RGBA.float(0, 0, 0, 1))

        currentGameState.paused = false
        sceneContainer.changeTo<MarioGameScene>(1)
    }

}