

function View()
{
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














View.prototype.initialize = function()
{
	this.initializeCanvasArrays();
	this.initializeCellArray();
	//this.set();
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

