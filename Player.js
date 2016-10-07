
function Player()
{
	this.tilesSeen = []; //Array of copies of the tiles the player has seen but that aren't currently visible to the player (max length 200 or something)
	this.initialize();
}

Player.prototype = new Actor();


Player.prototype.initialize = function()
{
	this.initializeTilesSeen();
}


Player.prototype.initializeTilesSeen = function()
{
	for (var x = 0 ; x < g.game.map.width ; x++)
	{
		this.tilesSeen.push([]);
		for (var y = 0 ; y < g.game.map.height ; y++)
		{
			this.tilesSeen[x].push(false);
		}
	}
}