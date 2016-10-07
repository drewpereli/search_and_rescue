

function Map(width, height)
{
	this.width = width;
	this.height = height;
	this.tiles = [];
	this.spawnPoint;

	this.initialize();
}


Map.prototype.initialize = function()
{
	for (var x = 0 ; x < this.width ; x++)
	{
		this.tiles.push([]);
		for (var y = 0 ; y < this.height ; y++)
		{
			this.tiles[x].push(new Tile(x, y, "OPEN"));
		}
	}

	this.spawnPoint = this.getRandomTile();
}


Map.prototype.getTile = function(x, y)
{
	return this.tiles[x][y];
}


//Returns a 1d array of all the tiles
Map.prototype.getTiles = function()
{
	var returnArray = [];
	for (var i = 0 ; i < this.tiles.length ; i++)
	{
		returnArray = returnArray.concat(this.tiles[i]);
	}

	return returnArray;
}


Map.prototype.getRandomTile = function()
{
	var xIndex = g.rand.nextInt(0, this.width);
	var yIndex = g.rand.nextInt(0, this.height);
	console.log(g.rand.nextInt(0, 100));
	return this.getTile(xIndex, yIndex);
}


Map.prototype.getRandomOpenTile = function()
{

}






