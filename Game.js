

function Game()
{
	this.map;
	this.player;
}


Game.prototype.initialize = function()
{
	this.map = new Map(100, 100);
	this.player = new Player(this.map.spawnPoint);
}