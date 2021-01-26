import Grid from '/Grid.js'
import Player from '/Player.js'
import Movement from '/Movement.js'
let cellWidth = 20
let grid = new Grid('.grid',800, cellWidth)

function startGame() { 
    let counter = 0

    setTimeout(function tmoHandler() {
        Movement.advancePlayer()
        if (counter <= 5100) {
            setTimeout(tmoHandler, 250)
        }

        counter++

    }, 250)

 }

Player.init(cellWidth)
Movement.init(Player, grid)

// =====================================
// start game
// =====================================

startGame()