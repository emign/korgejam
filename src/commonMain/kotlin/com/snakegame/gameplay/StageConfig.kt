package com.snakegame.gameplay

import com.snakegame.actors.MovementMode
import com.snakegame.actors.PacmanSnakeSkin
import com.snakegame.actors.SnakeSkin
import com.soywiz.korma.geom.Point

data class StageConfig(
    val level:Int = 1,
    val startingPoint:Point = Point(12, 8),
    val movementMode: MovementMode = MovementMode.SNAKE,
    val snakeSkin: SnakeSkin = SnakeSkin(),
    val scroll:Boolean = false
)

val SnakeStageConfig = StageConfig(
    level = 1,
    startingPoint = Point(8, 8),
    movementMode = MovementMode.SNAKE,
    snakeSkin = SnakeSkin(),
    scroll = false
)

val PacmanStageConfig = StageConfig(
    level = 2,
    startingPoint = Point(0, 10),
    movementMode = MovementMode.PACMAN,
    snakeSkin = PacmanSnakeSkin(),
    scroll = false
)

val MarioStageConfig = StageConfig(
    level = 3,
    startingPoint = Point(0, 10),
    movementMode = MovementMode.MARIO,
    snakeSkin = SnakeSkin(),
    scroll = true
)