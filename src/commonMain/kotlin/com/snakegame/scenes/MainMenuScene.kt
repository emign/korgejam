package com.snakegame.scenes

import com.soywiz.klock.seconds
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.scene.sleep
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.position
import com.soywiz.korge.view.text
import com.soywiz.korio.async.launchImmediately


class MainMenuScene() : Scene() {

    override suspend fun Container.sceneInit() {
        text("SNAKE GAME!").position(340,200)
        launchImmediately {
            sleep(1.seconds)
            sceneContainer.changeTo<GameScene>(1)
        }
    }

}