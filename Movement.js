
let Movement = {
    init: function(Player, grid) {
        this.player = Player
        this.gridWidth = grid.width()
        this.player.gridWidth = this.gridWidth
        this.cells = document.querySelectorAll('.grid div')
        this.rightBorderCells = []
        this.setRightBorderCells()
        this.leftBorderCells = []
        this.setLeftBorderCells()
        
        this.advancePlayer()
    },

    setRightBorderCells: function() {
        let noOfCells = this.cells.length
        let noOfBorderCells = noOfCells / this.gridWidth
        let cellIndex = 0
        for (let i = 1; i <= noOfBorderCells; i++) {
            cellIndex = ( i * this.gridWidth ) -1
            this.rightBorderCells.push(cellIndex)
        }
        console.log(this.rightBorderCells)
    },
    
    setLeftBorderCells: function() {
        let noOfCells = this.cells.length
        let noOfBorderCells = noOfCells / this.gridWidth
        let index = 0
        for (let i = 1; i <= noOfBorderCells; i++) {
            index = i * this.gridWidth
            this.leftBorderCells.push(index)
        }
        console.log(this.leftBorderCells)
    },

    placePlayerInNextCell: function() {
        // place player in grid
        this.cells[this.player.position].className = ''
        this.player.position = this.player.nextPosition
        this.cells[this.player.position].classList.add(...this.player.cssClass)
    },
    
    advancePlayer: function() {
        this.player.nextPosition = this.player.position + this.player.direction
        this.cells[this.player.position].className = ''
        this.player.cssClass = ['player', this.player.directionWord]
        this.cells[this.player.position].classList.add(...this.player.cssClass)
        if (this.rightBorderCells.includes(this.player.position) && this.player.direction === 1) {
            return // hit right border true
        }
        if (this.leftBorderCells.includes(this.player.position) && this.player.direction === -1) {
            return // hit left border true
        }
        
        if (this.cells[this.player.nextPosition] == undefined ) {
            return // top or bottom border true
        }
        // else advance player
        this.placePlayerInNextCell()
    }
}

export default Movement