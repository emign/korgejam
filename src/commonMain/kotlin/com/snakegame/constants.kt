package com.snakegame

import com.soywiz.klock.milliseconds

val DESIRED_FPS = 60
val MILLISECONDS_PER_FRAME = (1000.0/DESIRED_FPS.toDouble()).milliseconds

val TILE_SIZE = 32


//turnTileDR_LU
//turnTileRD_UL
//turnTileRU_DL
//turnTileUR_LD
enum class CURVES {
    DR, LU, RD, UL, RU, DL, UR, LD, XX
}