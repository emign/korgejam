package com.snakegame.map

import com.snakegame.TILE_SIZE
import com.soywiz.korge.tiled.TiledMapView
import com.soywiz.korma.geom.Point

class ItemSpawner(tiledMapView: TiledMapView, layer:Int)
{
    private val collisionLayer = tiledMapView.tiledMap.data.patternLayers[layer]

    fun getSpawnPositions():List<Point>{
        val list = mutableListOf<Point>()
        (0..collisionLayer.map.height-1).forEach { y ->
            (0..collisionLayer.map.width-1).forEach { x->
                if (collisionLayer.map[x, y].value != 0){
                    list.add(Point(x,y))
                }
            }
        }
        return list
    }
}