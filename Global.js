

var g = 
{
	game: false,
	view: false,

	constants: 
	{
		CELL_LENGTH: 15,
		VIEW_WIDTH_IN_CELLS: 20,
		VIEW_HEIGHT_IN_CELLS: 20,
	}
}

g.initialize = function()
{
	this.game = new Game();
	this.view = new View();
}