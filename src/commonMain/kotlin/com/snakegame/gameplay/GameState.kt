package com.snakegame.gameplay

class GameState() {
    var paused = false
    var restarting = false

    var score:Int = 0

    fun reset() {
        paused = false
        restarting = false
        score = 0
    }
}

var currentGameState = GameState()