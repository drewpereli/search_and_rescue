

function View()
{
	this.viewX = 0;//Top left corner tile of the view
	this.viewY = 0;//Top left corner tile of the view 
	this.widthInCells = g.constants.VIEW_WIDTH_IN_CELLS;
	this.heightInCells = g.constants.VIEW_HEIGHT_IN_CELLS;
	this.cells = 
	{
		terrain: [],
		objects: [],
		visibility: []
	};
	this.canvases = 
	{
		terrain: false,
		objects: false,
		visibility: false,
	}
	this.ctxs =  //Canvas contexts
	{
		terrain: false,
		objects: false,
		visibility: false,	
	}

	this.initialize();
}





View.prototype.set = function()
{
	for (var x = this.viewX ; x < this.viewX + this.widthInCells ; x++)
	{
		for (var y = this.viewY ; y < this.viewY + this.heightInCells ; y++)
		{
			var tile = g.game.map.getTile(x, y);
			var cells = this.getCellsFromTile(tile);
			//Only set the tile if it has changed
			if (tile.changed === false)
				continue;
			//If the tile has not been seen by the player, set it to black
			if (tile.seenByPlayer === false)
			{
				cells.visibility.fillRect("black");
				continue;
			}
			//If the tile has been changed and seen by the player
			//If the tile is invisible the player but isn't currently visible, paint a semi-transparent black rectangle
				//And swith the tile to the one in the players memory
			if (tile.visibleToPlayer === false)
			{
				cells.visibility.fillRect("rgba(0, 0, 0, .5)");
				tile = g.game.player.tilesSeen[x][y];
			}


		}
	}
}




View.prototype.getCellsFromTile = function(tile)
{
	var x = tile.x - this.viewX;
	var y = tile.y - this.viewY;
	var returnArray = 
	{
		terrain: this.cells.terrain[x][y],
		objects: this.cells.objects[x][y],
		visibility: this.cells.visibility[x][y]
	};
	return returnArray;
}



View.prototype.initialize = function()
{
	this.initializeCanvasArrays();
	this.initializeCellArray();
	this.set();
}













//Initialize sub methods
View.prototype.initializeCellArray = function()
{
	for (var layer in this.cells)
	{
		var cellArray = this.cells[layer];
		var currContext = this.ctxs[layer];
		for (var x = 0 ; x < this.widthInCells ; x++)
		{
			cellArray.push([]);
			for (var y = 0 ; y < this.heightInCells ; y++)
			{
				var cell = new Cell(x, y, currContext);
				cellArray[x].push(cell);
			}
		}
	}
}


View.prototype.initializeCanvasArrays = function()
{
	var thisView = this;
	$.each(this.canvases, function(index)
	{
		thisView.canvases[index] = $("#" + index + "Canvas")[0];
		var canvas = thisView.canvases[index];
		//Set canvas attributes
		canvas.height = g.constants.VIEW_HEIGHT_IN_CELLS * g.constants.CELL_LENGTH;
		canvas.width = g.constants.VIEW_WIDTH_IN_CELLS * g.constants.CELL_LENGTH;
		thisView.ctxs[index] = canvas.getContext("2d");
	});
}

