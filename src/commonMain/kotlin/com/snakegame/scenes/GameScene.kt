package com.snakegame.scenes

import com.snakegame.MILLISECONDS_PER_FRAME
import com.snakegame.TILE_SIZE
import com.snakegame.actors.MovementMode
import com.snakegame.actors.apple
import com.snakegame.actors.snake
import com.snakegame.input.getButtonPressed
import com.snakegame.map.CollisionChecker
import com.snakegame.map.tiledMap
import com.soywiz.kmem.clamp
import com.soywiz.kmem.setBits
import com.soywiz.kmem.unsetBits
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korge.input.onKeyUp
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.view.Container
import com.soywiz.korge.view.addFixedUpdater
import com.soywiz.korge.view.camera


open class GameScene(val level:Int, val movementMode: MovementMode, val scroll:Boolean) : Scene() {

    override suspend fun Container.sceneInit() {
        camera{
            val tiledMap = tiledMap(level)
            val collisionChecker = CollisionChecker(tiledMap)

            apple(views)
            val player = snake(views, collisionChecker, movementMode)

            if (scroll) {
                val cameraSpeed = 4
                val cameraCenter = 400
                val screenSize = 800
                addFixedUpdater(MILLISECONDS_PER_FRAME) {
                    val target = cameraCenter - player.head.xpos
                    if (x< target) {
                        x += cameraSpeed
                        if ( x > target) x = target
                    } else if ( x > target) {
                        x -= cameraSpeed
                        if ( x < target) x = target
                    }

                    if(x>0) x = 0.0
                    if(x < - (tiledMap.width - screenSize)) x = - (tiledMap.width - screenSize)
                }
            }
        }
    }
}

class SnakeGameScene() : GameScene(1, MovementMode.SNAKE, false)
class PacmanGameScene() : GameScene(2, MovementMode.PACMAN, false)
class MarioGameScene() : GameScene(3, MovementMode.MARIO, true)


