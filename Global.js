

var g = 
{
	game: false,
	view: false,
	rand: false,
	constants: 
	{
		CELL_LENGTH: 15,
		VIEW_WIDTH_IN_CELLS: 20,
		VIEW_HEIGHT_IN_CELLS: 20,
	}
}

g.initialize = function()
{
	this.rand = new Random();
	this.game = new Game();
	this.game.initialize();
	this.view = new View();
}