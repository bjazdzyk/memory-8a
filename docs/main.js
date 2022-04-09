class Game{
	constructor(cols, rows){
		this.rows = rows
		this.cols = cols

		this.boardSection = document.createElement("div")
		this.boardSection.setAttribute("class", "boardSection")

		this.playerSection = document.createElement("div")
		this.playerSection.setAttribute("class", "playerSection")		

		const game = document.getElementById("gameContainer")
		game.appendChild(this.boardSection)
		game.appendChild(this.playerSection)

		this.board = document.createElement("div")
		this.board.setAttribute("class", "board")
		this.board.style.width

		this.boardSection.appendChild(this.board)



		this.images = ["imgs/troll.png", "imgs/buzka.png"]

		this.imageRepetitions = [0, 0]
		//images.length = imageRepetitions.length

		this.imageData = {}


		this.build()

	}
	build(){
		for(let i=0; i<this.rows; i++){
			const row = document.createElement("row")
			row.setAttribute("class", "row")

			this.board.appendChild(row)
			//this.boardSection.appendChild(document.createElement("br"))

			for(let j=0; j<this.cols; j++){
				const cell = document.createElement("cell")
				const pos = `${j}:${i}`
				cell.setAttribute("class", "cell")
				cell.setAttribute("onclick", "clickCell(this)")
				cell.setAttribute("data-position", pos)
				
				row.appendChild(cell)

				let r = Math.floor(Math.random()*2)
				while(this.imageRepetitions[r] >= 2){
					r = Math.floor(Math.random()*2)
					console.log(r)
				}
				this.imageRepetitions[r]++
				this.imageData[pos] = r
			}
		}
	}
}

const game = new Game(2, 2)


const clickCell = (cell)=>{
	const position = cell.getAttribute("data-position")
	console.log(position, game.imageData[position])
	cell.style["background-image"] = `url(${game.images[game.imageData[position]]})`

}


//7 * 6 = 42 (21 uczniów 21 par 21*2=42)