
function Player(tile)
{
	this.tile = tile;
	this.tilesSeen = []; //Array of copies of the tiles the player has seen but that aren't currently visible to the player (max length 200 or something)
	this.visibleTiles = [];
	this.initialize();
}

Player.prototype = new Actor();


Player.prototype.initialize = function()
{
	tile.actor = this;
	this.initializeTilesSeen();
	this.setVision();
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

Player.prototype.setVision = function()
{
	this.visibleTiles.push(this.tile);
	this.tile.seenByPlayer = true;
	this.tile.visibleToPlayer = true;	
}