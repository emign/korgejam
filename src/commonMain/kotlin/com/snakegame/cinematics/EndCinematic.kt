package com.snakegame.cinematics

import com.snakegame.MILLISECONDS_PER_FRAME
import com.snakegame.actors.Direction
import com.snakegame.actors.Snake
import com.soywiz.klock.seconds
import com.soywiz.korge.time.timeout
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.show
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.*
import com.soywiz.korim.color.RGBA
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs
import kotlin.coroutines.CoroutineContext

class EndCinematic(container: Container, private val player: Snake, private val coroutineContext: CoroutineContext) {

    lateinit var finalImg: Image
    lateinit var fadeRect: SolidRect
    init {
        container.container {
            fadeRect = solidRect(1000.0, 1000.0, RGBA.float(0, 0, 0, 0))
            launch(coroutineContext) {
                finalImg = image(resourcesVfs["level3/LarrioEnd.png"].readBitmap())
                finalImg.alpha = 0.0
            }

            addFixedUpdater(MILLISECONDS_PER_FRAME, false) {
                if(player.head.xpos > 8840){
                    fade()
                    player.cinematicMode = false
                    player.goRight = true
                }
            }
        }
    }

    fun Container.fade(){
        launch(coroutineContext) {
            fadeRect.show(0.5.seconds)
            timeout(2.seconds) {
                launch(coroutineContext) {
                    finalImg.show(0.seconds)
                }
            }
        }
    }
}