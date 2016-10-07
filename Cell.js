
function Cell(x, y, context)
{
	this.x = x;
	this.y = y;
	this.ctx = context; //Context object for this cell
	this.xPx;
	this.yPx;

	this.initialize();
}


Cell.prototype.fillRect = function(color)
{

}


Cell.prototype.initialize = function()
{
	this.xPx = this.x * g.constants.CELL_LENGTH;
	this.yPx = this.y * g.constants.CELL_LENGTH;
}

