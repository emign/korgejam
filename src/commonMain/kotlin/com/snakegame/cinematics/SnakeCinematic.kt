package com.snakegame.cinematics

import com.snakegame.actors.Direction
import com.snakegame.actors.Snake
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

class SnakeCinematic(container: Container, player: Snake, private val coroutineContext: CoroutineContext){

    init {
        container.container {
            player.bocadilloSmall.alpha = 0.0
            player.bocadilloBig.alpha = 0.0

            timeout(5.seconds){
                player.bocadilloBig.talk("I'M TIRED", 8.0)
                player.cinematicMode = true
            }
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