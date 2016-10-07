

function Game()
{
	this.map;
	this.player;

	this.initialize();
}


Game.prototype.initialize = function()
{
	this.map = new Map(100, 100);
}