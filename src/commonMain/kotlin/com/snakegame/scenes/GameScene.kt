package com.snakegame.scenes

import com.snakegame.map.tiledMap
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.Container


class GameScene() : Scene() {

    override suspend fun Container.sceneInit() {
        tiledMap(1)
    }
}
