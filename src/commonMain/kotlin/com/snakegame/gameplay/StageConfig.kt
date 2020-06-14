package com.snakegame.gameplay

import com.snakegame.actors.MovementMode
import com.snakegame.actors.PacmanSnakeSkin
import com.snakegame.actors.SnakeSkin
import com.soywiz.korma.geom.Point

data class StageConfig(
    val level:Int = 1,
    val itemLayer:Int = 0,
    val startingPoint:Point = Point(12, 8),
    val movementMode: MovementMode = MovementMode.SNAKE,
    val snakeSkin: SnakeSkin = SnakeSkin(),
    val scroll:Boolean = false,
    val horizontalLimit:Boolean = true
)

val SnakeStageConfig = StageConfig(
    level = 1,
    itemLayer = 0,
    startingPoint = Point(8, 8),
    movementMode = MovementMode.SNAKE,
    snakeSkin = SnakeSkin(),
    scroll = false,
    horizontalLimit = true
)

val PacmanStageConfig = StageConfig(
    level = 2,
    itemLayer = 0,
    startingPoint = Point(0, 10),
    movementMode = MovementMode.PACMAN,
    snakeSkin = PacmanSnakeSkin(),
    scroll = false,
    horizontalLimit = false
)

val MarioStageConfig = StageConfig(
    level = 3,
    itemLayer = 1,
    startingPoint = Point(0, 10),
    movementMode = MovementMode.MARIO,
    snakeSkin = SnakeSkin(),
    scroll = true,
    horizontalLimit = true
)