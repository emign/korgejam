package com.snakegame.scenes

import com.snakegame.MILLISECONDS_PER_FRAME
import com.snakegame.TILE_SIZE
import com.snakegame.actors.*
import com.snakegame.input.getButtonPressed
import com.snakegame.map.CollisionChecker
import com.snakegame.map.tiledMap
import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.klock.timesPerSecond
import com.soywiz.kmem.clamp
import com.soywiz.kmem.setBits
import com.soywiz.kmem.unsetBits
import com.soywiz.korge.atlas.readAtlas
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korge.input.onKeyUp
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.*
import com.soywiz.korim.bitmap.Bitmap
import com.soywiz.korim.color.RGBA
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs


open class GameScene(val level:Int, val movementMode: MovementMode, val snakeSkin: SnakeSkin, val scroll:Boolean) : Scene() {

    fun Container.fade(){
        val fadeRect = solidRect(1000.0, 1000.0, RGBA.float(0, 0, 0, 0))
        launch {
            fadeRect.tween(fadeRect::alpha[0.0, 1.0], time = 2.seconds)
        }
    }

    fun Container.unFade(){
        val fadeRect = solidRect(1000.0, 1000.0, RGBA.float(0, 0, 0, 1))
        launch {
            fadeRect.tween(fadeRect::alpha[1.0, 0.0], time = 2.seconds)
        }
    }

    open suspend fun Container.customInit(){}

    override suspend fun Container.sceneInit() {
        camera{
            val tiledMap = tiledMap(level)
            val collisionChecker = CollisionChecker(tiledMap)

            apple(views)
            val player = snake(views, snakeSkin, collisionChecker, movementMode)

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
        customInit()
        unFade()
    }
}

class SnakeGameScene() : GameScene(1, MovementMode.SNAKE, SnakeSkin(),false){
    override suspend fun Container.customInit() {
        val font = resourcesVfs["I-pixel-u.fnt"].readBitmapFont()
        text("00023", 32.0, font = font).position(25, 15)
    }
}

class PacmanGameScene() : GameScene(2, MovementMode.PACMAN, PacmanSnakeSkin(),false)
class MarioGameScene() : GameScene(3, MovementMode.MARIO, SnakeSkin(), true)


