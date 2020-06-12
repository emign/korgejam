package com.snakegame.scenes

import com.soywiz.klock.seconds
import com.soywiz.korge.scene.Scene
import com.soywiz.korge.tween.get
import com.soywiz.korge.tween.tween
import com.soywiz.korge.view.*
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.async.launchImmediately
import com.soywiz.korio.file.std.resourcesVfs
import com.soywiz.korma.geom.degrees
import com.soywiz.korma.interpolation.Easing

class LoadingScene() : Scene() {

    val minDegrees = (-16).degrees
    val maxDegrees = (+16).degrees

    override suspend fun Container.sceneInit() {
        val image = image(resourcesVfs["korge.png"].readBitmap()) {
            rotation = maxDegrees
            anchor(.5, .5)
            scale(.8)
            position(400, 300)
        }

        launchImmediately {
            image.tween(image::rotation[minDegrees], time = 1.seconds, easing = Easing.EASE_IN_OUT)
            image.tween(image::rotation[maxDegrees], time = 1.seconds, easing = Easing.EASE_IN_OUT)

            sceneContainer.changeTo<MainMenuScene>()
        }
    }
}