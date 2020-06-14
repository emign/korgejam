package com.snakegame.cinematics

import com.snakegame.actors.Direction
import com.snakegame.actors.Snake
import com.snakegame.actors.snake
import com.soywiz.klock.seconds
import com.soywiz.korge.time.delay
import com.soywiz.korge.time.timeout
import com.soywiz.korge.time.wait
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.hide
import com.soywiz.korge.tween.show
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.*
import com.soywiz.korim.color.Colors
import com.soywiz.korio.async.launch
import com.soywiz.korio.async.launchImmediately
import kotlin.coroutines.CoroutineContext

class SnakeCinematic(container: Container, private val player: Snake, private val coroutineContext: CoroutineContext){

    init {
        container.container {
            timeout(20.seconds){
                player.bocadilloBig.talk("WHY?", 8.0)
                timeout(10.seconds){
                    player.bocadilloBig.talk("THAT'S FUN?", 7.0)
                    timeout(10.seconds){
                        player.bocadilloBig.talk("I'M TIRED", 8.0)

                        if (player.direction != Direction.LEFT)
                            player.cinematicMode = true

                        goRight()
                    }
                }
            }
        }
    }

    fun Container.goRight(){
        timeout(5.seconds) {
            player.cinematicMode = false
            if(player.direction == Direction.LEFT){
                player.cinematicMode = false
                goRight()
                return@timeout
            }
            player.bocadilloBig.talk("FREEEDOM!!", 8.0)
            player.goRight = true
        }
    }

    fun Image.talk(text: String, size: Double = 0.0){
        (getChildAt(0) as Text).apply {
            this.text = text
            if(size != 0.0)
                textSize = size
        }

        launch(coroutineContext) {
            show(1.seconds)
            wait(2.seconds)
            hide(1.seconds)
        }
    }
}