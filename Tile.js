

function Tile(x, y, terrain)
{
	this.x = x;
	this.y = y;
	this.terrain;
	this.object = false;
	this.changed = true; //Whether or not the tile changed.
	this.seenByPlayer = false;
	this.visibleToPlayer = false;
	this.blocksMovement = false;
	this.blocksLight = false;
}