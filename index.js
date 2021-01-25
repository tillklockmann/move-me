import Grid from '/Grid.js'
import Player from '/Player.js'
import Movement from '/Movement.js'
let grid = new Grid('.grid',800, 20)


Player.init()
Movement.init(Player, grid)

// =====================================
// start game
// =====================================

let counter = 0

setTimeout(function tmoHandler() {
    Movement.advancePlayer()
    if (counter <= 5100) {
        setTimeout(tmoHandler, 250)
    }

    counter++

}, 250)
