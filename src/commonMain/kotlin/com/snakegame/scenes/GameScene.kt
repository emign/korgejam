package com.snakegame.scenes

import com.snakegame.actors.apple
import com.snakegame.actors.snake
import com.snakegame.input.getButtonPressed
import com.snakegame.map.tiledMap
import com.soywiz.kmem.setBits
import com.soywiz.kmem.unsetBits
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korge.input.onKeyUp
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.Container


class GameScene() : Scene() {

    override suspend fun Container.sceneInit() {
        var key = 0

        onKeyDown { key = key.setBits(getButtonPressed(it)) }
        onKeyUp { key = key.unsetBits(getButtonPressed(it)) }


        tiledMap(1)
        apple(views)
        snake(views)
    }
}
