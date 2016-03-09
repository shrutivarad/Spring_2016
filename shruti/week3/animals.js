var animals = ["parrot", "bear", "tiger"]

var inList = function(search){
	if (animals.indexOf(search) != -1){
		return true;
	} else if(animals.indexOf(search) == -1){
	return false;
	}
	}
}

var getRandom = function(array){
var randomIndex = Math.floor(Math.random()*animals.length); 

return array[randomIndex];
}