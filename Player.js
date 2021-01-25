let Player = {
    
    init: function() {
        this.position = 1, // index of grid div
        this.direction = 1,
        this.directionWord = 'right'
        this.cssClass = ['player', 'right'],
        this.nextPosition = 1,
        this.gridWidth = 0 // set by Movement
        document.addEventListener('keyup', Player.control)

    },
    //assign functions to keycodes
    control: function(e) {
        
        if(e.keyCode === 39) {
            Player.direction = 1 // right
            Player.directionWord = 'right'
        } else if (e.keyCode === 38) {
            Player.direction = -Player.gridWidth // up
            Player.directionWord = 'top'
        } else if (e.keyCode === 37) {
            Player.direction = -1 // left
            Player.directionWord = 'left'
        } else if (e.keyCode === 40) {
            Player.direction = +Player.gridWidth // down
            Player.directionWord = 'bottom'
        }
        
    },



}

export default Player