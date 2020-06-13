package com.snakegame.map

import com.snakegame.TILE_SIZE
import com.soywiz.korge.tiled.TiledMapView

class CollisionChecker(tiledMapView:TiledMapView)
{
    private val collisionLayer = tiledMapView.tiledMap.data.patternLayers.get(0)

    fun checkCollision(x:Double, y:Double, block:()->Unit) {
        val tilePosX = x.toInt()/TILE_SIZE
        val tilePosY = y.toInt()/TILE_SIZE

        if(tilePosX<0 || tilePosY<0) return
        if(collisionLayer.map.width<=tilePosX) return
        if(collisionLayer.map.height<=tilePosY) return

        if(collisionLayer.map[tilePosX, tilePosY].value != 0){
            block()
        }
    }
}