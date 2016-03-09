
var Movie = function(title, director, year, stars, genre, watched){
	this.title = title;
	this.director = director;
	this.year = year;
	this.stars = stars;
	this.genre = genre;
	this.watched = watched;
}
var Movie {
	title = "Harry Potter and the Prisoner of Azkaban",
	director = "Alfonso Cuaron",
	year = "2004",
	stars = ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
	genre = ["Fantasy", "Adventure", "Comedy"],
	watched = 10,
}

/*var watch = function(){
	Movie.watched += 1;
	alert("Currently watching " + movie.title);
}*/

Movie.prototype.watch = function(){
	Movie.watched += 1;
}

Movie.prototype.printOut = function(){
	alert(Movie.title + 
		" came out in " + Movie.year + 
		". The movie stars " + Movie.stars[1] + ", " +
		Movie.stars[2] + " and " + Movie.stars[3] + 
		". I rated it 5 stars and have watched it " + Movie.watched + 
		" times.")
}
//constructor
/*var Car = function(make, model, year, color, miles){ 
	this.make = make,
	this.model = model,
	this.year = year,
	this.color = color,
	this.miles = miles
}

var cassCar = new Car('Nissan', 'Pathfinder', 1995, 'Green', -1000)

Car.prototype.drive = function(distance) {
	this.miles += distance;
}*/
