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
    open val turnTile = "snake_body_turn.png"
    open val turnTileDR_LU = "snake_body_turn_dr_lu.png"
    open val turnTileRD_UL = "snake_body_turn_rd_ul.png"
    open val turnTileRU_DL = "snake_body_turn_ru_dl.png"
    open val turnTileUR_LD = "snake_body_turn_ur_ld.png"
}

class PacmanSnakeSkin():SnakeSkin() {
    override val headTile = "PacMan_Snake_Head_01.png"
    override val eatingHeadTile = "PacMan_Snake_Head_02.png"
    override val bodyTile = "PacMan_Snake_Bdoy_01.png"
    override val bodyFatTile = "PacMan_Snake_Bdoy_02.png"
    override val tailTile = "PacMan_Snake_Tail.png"
    override val turnTile = "PacMan_Snake_body_turn.png"
    override val turnTileDR_LU = "PacMan_Snake_body_turn_dr_lu.png"
    override val turnTileRD_UL = "PacMan_Snake_body_turn_rd_ul.png"
    override val turnTileRU_DL = "PacMan_Snake_body_turn_ru_dl.png"
    override val turnTileUR_LD = "PacMan_Snake_body_turn_ur_ld.png"
}