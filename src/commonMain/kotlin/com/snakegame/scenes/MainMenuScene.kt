package com.snakegame.scenes

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


class MainMenuScene() : Scene() {

    override suspend fun Container.sceneInit() {
        tiledMap(1)
        val font = resourcesVfs["texts/I-pixel-u.fnt"].readBitmapFont()
        text("A CLASSIC SNAKE GAME", 32.0, font = font).centerXOn(this).positionY(200)
        val questionMark = text("?", 32.0, font = font).position(632, 200)
        questionMark.color = RGBA.float(255, 255,255, 0)

        launch {
            wait(2.seconds)
            questionMark.tween(questionMark::color[RGBA.float(255, 255,255, 0), RGBA.float(255, 255,255, 1)], time = 1.seconds)
        }

        text("PLAY", 28.0, font = font).centerXOn(this).positionY(350).onClick {
            sceneContainer.changeTo<SnakeGameScene>(1)
        }
        val pacman = text("PACMAN", 28.0, font = font).centerXOn(this).positionY(400).onClick {
            sceneContainer.changeTo<PacmanGameScene>(1)
        }!!
        pacman.hide(0.seconds)
        val mario = text("MARIO", 28.0, font = font).centerXOn(this).positionY(450).onClick {
            sceneContainer.changeTo<MarioGameScene>(1)
        }!!
        mario.hide(0.seconds)
        text("LEVELS", 28.0, font = font).centerXOn(this).positionY(400).onClick {
            it.view.hide(0.seconds)
            mario.alpha = 1.0
            pacman.alpha = 1.0
            it.view.removeFromParent()
        }
    }

}