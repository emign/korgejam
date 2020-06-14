package com.snakegame.scenes

import com.snakegame.MILLISECONDS_PER_FRAME
import com.snakegame.actors.*
import com.snakegame.gameplay.*
import com.snakegame.map.CollisionChecker
import com.snakegame.map.tiledMap
import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.*
import com.soywiz.korim.color.RGBA
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korio.async.delay
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs


open class GameScene(val stageConfig: StageConfig) : Scene() {

    fun Container.fade(){
        val fadeRect = solidRect(1000.0, 1000.0, RGBA.float(0, 0, 0, 0))
        launch {
            fadeRect.tween(fadeRect::alpha[0.0, 1.0], time = 1.seconds)
        }
    }

    suspend fun Container.unFade(){
        val fadeRect = solidRect(1000.0, 1000.0, RGBA.float(0, 0, 0, 1))
        launch {
            fadeRect.tween(fadeRect::alpha[1.0, 0.0], time = 1.seconds)
        }
    }

    open suspend fun Container.customInit(){}

    override suspend fun Container.sceneInit() {
        camera{
            val tiledMap = tiledMap(stageConfig.level)
            val collisionChecker = CollisionChecker(tiledMap)


            val player = snake(views, stageConfig.startingPoint, stageConfig.snakeSkin, collisionChecker, stageConfig.movementMode)

            if (stageConfig.scroll) {
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

            val font = resourcesVfs["texts/I-pixel-u.fnt"].readBitmapFont()

            val getReady = text("GET READY!", 64.0, font = font)
                    .centerBetween(0,0,800,400)
                    .visible(false)

            launch {
                delay(1.milliseconds)
                currentGameState.paused = true
                delay(1.seconds)
                getReady.visible = true
                delay(1.seconds)
                getReady.visible = false
                currentGameState.paused = false

                apple(views, collisionChecker)
            }
        }
        customInit()
        unFade()
    }
}

class SnakeGameScene() : GameScene(SnakeStageConfig){
    override suspend fun Container.customInit() {
        val font = resourcesVfs["texts/I-pixel-u.fnt"].readBitmapFont()
        text("00023", 32.0, font = font).position(25, 15)
    }
}

class PacmanGameScene() : GameScene(PacmanStageConfig)
class MarioGameScene() : GameScene(MarioStageConfig)


