
let Movement = {
    init: function(Player, grid) {
        this.player = Player
        this.playerDiv = this.player.create()
        this.grid = grid
        this.gridWidth = grid.width()
        this.player.gridWidth = this.gridWidth
        this.cells = document.querySelectorAll('.grid div')
        this.rightBorderCells = []
        this.setRightBorderCells()
        this.leftBorderCells = []
        this.setLeftBorderCells()
        this.placePlayerInGrid()
        this.advancePlayer()
    },

    placePlayerInGrid: function() {
        this.grid.htmlEl.appendChild(this.playerDiv)
    },

    setRightBorderCells: function() {
        let noOfCells = this.cells.length
        let noOfBorderCells = noOfCells / this.gridWidth
        let cellIndex = 0
        for (let i = 1; i <= noOfBorderCells; i++) {
            cellIndex = ( i * this.gridWidth ) -1
            this.rightBorderCells.push(cellIndex)
        }
    },
    
    setLeftBorderCells: function() {
        let noOfCells = this.cells.length
        let noOfBorderCells = noOfCells / this.gridWidth
        let index = 0
        for (let i = 1; i <= noOfBorderCells; i++) {
            index = i * this.gridWidth
            this.leftBorderCells.push(index)
        }
    },

    placePlayerInNextCell: function() {
        // move player div
        this.player.position = this.player.nextPosition
        let direct = this.player.directionWord
        let pos, step = this.grid.celldimension
        console.log(direct)
        if ( direct == 'left' || direct == 'right') {
            pos = this.playerDiv.style.left
            pos = parseInt(pos.substr(0,pos.indexOf('px')))
           
            pos = (direct == 'left') ? pos - step : pos + step
            
            this.playerDiv.style.left = pos + 'px'
        }
        if ( direct == 'top' || direct == 'bottom') {
            pos = this.playerDiv.style.top
            pos = parseInt(pos.substr(0,pos.indexOf('px')))
            
            pos = (direct == 'top') ? pos - step : pos + step
            
            this.playerDiv.style.top = pos + 'px'
        }
        this.playerDiv.classList.add(direct)
        console.log(this.playerDiv.style.left)
    },
    
    advancePlayer: function() {
        this.player.nextPosition = this.player.position + this.player.direction
        this.playerDiv.className = 'player'
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