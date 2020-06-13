package com.snakegame.scenes

import com.soywiz.klock.seconds
import com.soywiz.korge.input.onClick
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.scene.sleep
import com.soywiz.korge.ui.textButton
import com.soywiz.korge.view.*
import com.soywiz.korio.async.launchImmediately


class MainMenuScene() : Scene() {

    override suspend fun Container.sceneInit() {
        text("SNAKE GAME!").position(340,200)
        textButton {
            text = "Start"
            position(340, 400)
            onClick {
                sceneContainer.changeTo<GameScene>(1)
            }
        }
    }

}