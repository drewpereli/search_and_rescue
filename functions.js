
function ShuffleArray(a) 
{
	var originalArray = a.slice();
	var returnArray = [];
	while (originalArray.length > 0)
	{
		var index = g.rand.nextInt(0, originalArray.length);
		returnArray.push(originalArray[index]);
		originalArray.splice(index, 1);
	}
};

