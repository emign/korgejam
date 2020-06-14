package com.snakegame.actors

import com.soywiz.korge.atlas.Atlas
import com.soywiz.korge.atlas.readAtlas
import com.soywiz.korio.file.std.resourcesVfs

open class SnakeSkin() {
    open val headTile = "snake_head_01.png"
    open val eatingHeadTile = "snake_head_02.png"
    open val bodyTile = "snake_body.png"
    open val bodyFatTile = "snake_body_2.png"
    open val tailTile = "snake_body_tail.png"
}

class PacmanSnakeSkin():SnakeSkin() {
    override val headTile = "PacMan_Snake_Head_01.png"
    override val eatingHeadTile = "PacMan_Snake_Head_02.png"
    override val bodyTile = "PacMan_Snake_Bdoy_01.png"
    override val bodyFatTile = "PacMan_Snake_Bdoy_02.png"
    override val tailTile = "PacMan_Snake_Tail.png"
}