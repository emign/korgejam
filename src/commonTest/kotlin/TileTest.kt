//import com.soywiz.klock.hr.*
import com.snakegame.map.tiledMap
import com.soywiz.kmem.*
import com.soywiz.korev.*
import com.soywiz.korge.*
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korge.input.onKeyUp
import com.soywiz.korge.tiled.*
import com.soywiz.korge.view.*
import com.soywiz.korim.format.readBitmap
import com.soywiz.korio.file.std.*
import kotlin.math.pow


val BUTTON_UP: Int = 1
val BUTTON_DOWN: Int = 2
val BUTTON_LEFT: Int = 4
val BUTTON_RIGHT: Int = 8
val BUTTON_A: Int = 16
val BUTTON_B: Int = 32
val BUTTON_C: Int = 64
val BUTTON_START: Int = 128

fun getButtonPressed(it: KeyEvent) = when (it.key) {
    Key.A, Key.LEFT -> BUTTON_LEFT
    Key.D,  Key.RIGHT -> BUTTON_RIGHT
    Key.W, Key.UP -> BUTTON_UP
    Key.S, Key.DOWN -> BUTTON_DOWN

    Key.SPACE -> BUTTON_A

    Key.ENTER -> BUTTON_START

    else -> 0
}


suspend fun main() = Korge(width = 800, height = 600) {
    var key = 0

    onKeyDown { key = key.setBits(getButtonPressed(it)) }
    onKeyUp { key = key.unsetBits(getButtonPressed(it)) }

    val camera = camera {
        tiledMap(2)
    }
    var dx = 0.0
        var dy = 0.0

        addUpdatable {
            //val scale = 1.0 / (it / 16.666666)
            val scale = if (it == 0) 0.0 else (it / 16.666666)

            if (key == BUTTON_RIGHT) dx -= 1.0
            if (key == BUTTON_LEFT) dx += 1.0
            if (key == BUTTON_UP) dy += 1.0
            if (key == BUTTON_DOWN) dy -= 1.0
            dx = dx.clamp(-10.0, +10.0)
            dy = dy.clamp(-10.0, +10.0)
            camera.x += dx * scale
            camera.y += dy * scale
            dx *= 0.9.pow(scale)
            dy *= 0.9.pow(scale)
        }

}

