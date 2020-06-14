package com.snakegame.cinematics

import com.snakegame.MILLISECONDS_PER_FRAME
import com.snakegame.actors.Direction
import com.snakegame.actors.Snake
import com.snakegame.resources.Resources
import com.soywiz.klock.milliseconds
import com.soywiz.klock.seconds
import com.soywiz.korge.time.timeout
import com.soywiz.korge.time.wait
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.show
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.*
import com.soywiz.korim.color.RGBA
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.launch
import com.soywiz.korio.file.std.resourcesVfs
import kotlin.coroutines.CoroutineContext

class EndCinematic(container: Container, private val player: Snake, private val coroutineContext: CoroutineContext, private val menu: ()->Unit) {

    lateinit var finalImg: Image
    lateinit var credits: Image
    lateinit var fadeRect: SolidRect
    var ended = false

    init {
        container.container {
            fadeRect = solidRect(1000.0, 1000.0, RGBA.float(0, 0, 0, 0))
            launch(coroutineContext) {
                finalImg = image(resourcesVfs["level3/LarrioEnd.png"].readBitmap())
                credits = image(resourcesVfs["level3/Credits.png"].readBitmap())
                finalImg.alpha = 0.0
                credits.alpha = 0.0
            }

            addFixedUpdater(MILLISECONDS_PER_FRAME, false) {
                if(player.head.xpos > 8840 && !ended){
                    fade()
                    Resources.channel.volume /= 10
                    Resources.levelCompleted.play()
                    timeout(7.seconds){
                        Resources.channel.volume = 0.5
                        launch(coroutineContext) {
                            while (Resources.channel.volume < 1.0) {
                                wait(100.milliseconds)
                                Resources.channel.volume += 0.01
                            }
                        }
                    }
                    ended = true
                    player.cinematicMode = false
                    player.goRight = true
                }
            }
        }
    }

    fun Container.fade(){
        launch(coroutineContext) {
            fadeRect.show(2.seconds)
            timeout(2.seconds) {
                finalImg.alpha = 1.0

                timeout(8.seconds) {
                    credits.alpha = 1.0

                    timeout(10.seconds) {
                        menu()
                    }
                }
            }
        }
    }
}