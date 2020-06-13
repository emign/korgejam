package com.snakegame.scenes

import com.snakegame.actors.MovementMode
import com.snakegame.actors.apple
import com.snakegame.actors.snake
import com.snakegame.input.getButtonPressed
import com.snakegame.map.CollisionChecker
import com.snakegame.map.tiledMap
import com.soywiz.kmem.setBits
import com.soywiz.kmem.unsetBits
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korge.input.onKeyUp
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.Container


open class GameScene(val level:Int, val movementMode: MovementMode) : Scene() {

    override suspend fun Container.sceneInit() {
        val tiledMap = tiledMap(level)
        val collisionChecker = CollisionChecker(tiledMap)

        apple(views)
        snake(views, collisionChecker, movementMode)
    }
}

class SnakeGameScene() : GameScene(1, MovementMode.SNAKE)
class PacmanGameScene() : GameScene(2, MovementMode.PACMAN)
class MarioGameScene() : GameScene(3, MovementMode.MARIO)


