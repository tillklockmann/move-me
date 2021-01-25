class Grid {
    constructor(selector, gridDimension, gridCellDimension) {
        this.htmlEl = document.querySelector(selector)
        this.dimension = gridDimension
        this.celldimension = gridCellDimension
        this.init()
    }

    width() {
        return this.dimension / this.celldimension
    }

    numberOfCells() {
        return Math.pow(
            this.width(), 2
        )
    }

    init() {
        this.htmlEl.style.width = this.dimension + 'px'
        this.htmlEl.style.height = this.dimension + 'px'
        for (let i = 0; i < this.numberOfCells(); i++) {
            this.htmlEl.appendChild(this.createCell(i))
        }
    }

    createCell(i) {
        let div = document.createElement('div')
        div.style.width = this.celldimension + 'px'
        div.style.height = this.celldimension + 'px'
        // div.innerHTML = i
        return div
    }
}

export default Grid