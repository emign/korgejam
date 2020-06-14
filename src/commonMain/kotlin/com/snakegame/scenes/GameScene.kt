package com.snakegame.scenes

import com.snakegame.MILLISECONDS_PER_FRAME
import com.snakegame.TILE_SIZE
import com.snakegame.actors.*
import com.snakegame.cinematics.SnakeCinematic
import com.snakegame.gameplay.*
import com.snakegame.map.CollisionChecker
import com.snakegame.map.ItemSpawner
import com.snakegame.map.tiledMap
import com.snakegame.resources.Resources
import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.scene.sleep
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.*
import com.soywiz.korim.color.RGBA
import com.soywiz.korim.font.readBitmapFont
import com.soywiz.korio.async.delay
import com.soywiz.korio.async.launch
import com.soywiz.korio.async.launchImmediately
import com.soywiz.korio.file.std.resourcesVfs


open class GameScene(val stageConfig: StageConfig) : Scene() {

    var fadeOff = false

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
        Resources(views).loadAll()

        val font = Resources.font

        addUpdater {
            if(fadeOff){
                fade()
            }
        }

        camera{
            val tiledMap = tiledMap(stageConfig.level)
            val collisionChecker = CollisionChecker(tiledMap, stageConfig.horizontalLimit)

            if(stageConfig == PacmanStageConfig){
                ItemSpawner(tiledMap, stageConfig.itemLayer).getSpawnPositions().forEach {
                    dot(views, it * TILE_SIZE)
                }
                ghost(collisionChecker, 1)
                ghost(collisionChecker, 2)
                ghost(collisionChecker, 3)
                ghost(collisionChecker, 4)
                pacoman(collisionChecker)

            }
            if(stageConfig == MarioStageConfig){
                ItemSpawner(tiledMap, stageConfig.itemLayer).getSpawnPositions().forEach {
                    coin(views, it * TILE_SIZE)
                }
            }

            val player = snake(views, stageConfig.startingPoint, stageConfig.snakeSkin, collisionChecker, font, stageConfig.movementMode,
                onDied = {
                    println("DIEDDD")
                    currentGameState.paused = true
                    launchImmediately {
                        text("YOU DIED!", 64.0, font = font)
                                .centerBetween(0,0,800,400)
                        sleep(1.seconds)
                        //currentGameState.paused = false
                        currentGameState.restarting = true

                        when(stageConfig) {
                            SnakeStageConfig->sceneContainer.changeTo<RestartSnakeScene>()
                            PacmanStageConfig->sceneContainer.changeTo<RestartPacmanScene>()
                        }



                    }
                },onItemEaten = {
                    onItemEaten()
                },nextLevel = {
                    launchImmediately {
                        println("Call next level!")
                        nextLevel()
                    }
                }
            )

            var fallen = false
            addUpdater {
                if(stageConfig == MarioStageConfig) {
                    if(!fallen && player.body.last().y > 632) {
                        fallen = true
                        currentGameState.paused = true
                        launch {
                            fadeOff = true
                            sleep(1.seconds)
                            sceneContainer.changeTo<RestartMarioScene>()
                        }
                    }
                }
            }


            when(stageConfig.level){
                1->SnakeCinematic(this@sceneInit, player, coroutineContext)
            }

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

                if(stageConfig == SnakeStageConfig){
                    apple(views, collisionChecker)
                }
            }
        }
        customInit()

        if(!currentGameState.restarting) unFade()
    }

    open fun onItemEaten() {
        currentGameState.score += 100
    }

    open suspend fun nextLevel(){

    }
}

class SnakeGameScene() : GameScene(SnakeStageConfig){
    lateinit var scoreText:Text

    var apples = 0

    override suspend fun Container.customInit() {
        val font = Resources.font
        scoreText = text("000000", 32.0, font = font).position(25, 15)
        updateScore()
    }

    fun updateScore(){
        scoreText.text = currentGameState.score.toString().padStart(6, '0')
    }

    override fun onItemEaten() {
        super.onItemEaten()
        updateScore()
        apples++
    }

    override suspend fun nextLevel() {
        fadeOff = true

        launch {
            delay(1.seconds)
            currentGameState.paused = true
            sceneContainer.changeTo<TransitionToPacmanScene>(1)
        }
    }
}

class PacmanGameScene() : GameScene(PacmanStageConfig){
    override suspend fun nextLevel() {
        fadeOff = true
        delay(1.seconds)
        currentGameState.paused = true
        println("nextLevel.1")
        sceneContainer.changeTo<TransitionToMarioScene>()
    }
}
class MarioGameScene() : GameScene(MarioStageConfig)


