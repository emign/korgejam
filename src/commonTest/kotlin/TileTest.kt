//import com.soywiz.klock.hr.*
import com.snakegame.actors.snake
import com.snakegame.input.getButtonPressed
import com.snakegame.map.tiledMap
import com.soywiz.kmem.clamp
import com.soywiz.kmem.setBits
import com.soywiz.kmem.unsetBits
import com.soywiz.korge.Korge
import com.soywiz.korge.input.onKeyDown
import com.soywiz.korge.input.onKeyUp
import com.soywiz.korge.view.camera
import kotlin.math.pow


suspend fun main() = Korge(width = 800, height = 600) {
    var key = 0

    onKeyDown { key = key.setBits(getButtonPressed(it)) }
    onKeyUp { key = key.unsetBits(getButtonPressed(it)) }

    val camera = camera {
        tiledMap(1)
        //snake(views)
    }
        var dx = 0.0
        var dy = 0.0

        addUpdatable {
            //val scale = 1.0 / (it / 16.666666)
            val scale = if (it == 0) 0.0 else (it / 16.666666)

            /*if (key == BUTTON_RIGHT) dx -= 1.0
            if (key == BUTTON_LEFT) dx += 1.0
            if (key == BUTTON_UP) dy += 1.0
            if (key == BUTTON_DOWN) dy -= 1.0*/
            dx = dx.clamp(-10.0, +10.0)
            dy = dy.clamp(-10.0, +10.0)
            camera.x += dx * scale
            camera.y += dy * scale
            dx *= 0.9.pow(scale)
            dy *= 0.9.pow(scale)
        }

}



