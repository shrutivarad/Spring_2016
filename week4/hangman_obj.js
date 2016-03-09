var Letter = function(value, hidden){
	this.value = value;
	this.hidden = hidden;
}

Letter.prototype.hide = function(){
	this.hidden = true;
}

Letter.prototype.show = function(){
	this.hidden = false;
}

Letter.prototype.render = function(){
	if(this.hidden == true){
		return '_'
	} else return this.value;

}

//Testing Letter
// var test = new Letter('cat', true);
// console.log(test);
var Word = function(){
	this.letters = [];
}

Word.prototype.getLetters = function(newWord){
	var newArray = [];

	for(var i = 0; i < newWord.length; i++){
		newArray.push(new Letter(newWord[i]));
	}

	this.letters = newArray;
}

var answer = new Word();
answer.getLetters('cat');
// var Word = function(letters){
// 	this.letters = letters;
// }

// Word.prototype.getLetters = function(newWord){
// 	this.letters += newWord;
// }

//Word.prototype.isFound = function(){
//	if 
//}

//Word.prototype.try = function(letter){

//}

//Word.prototype.render = function(){

//}

// var Game = function(){
// 	this.guesses = guesses;
// 	this.guessedLetters = guessedLetters;
// 	this.words = words;
// 	this.currentWord = currentWord;
// }

// Game.prototype.startGame = function(wordsArray){
// 	this.guesses = 10;
// 	this.currentWord = word[i];
// 	//this.guessedLetters RESET
// }

// var getRandom = function(words){
// 	return word[Math.floor(Math.random()*words.length)]
// }

// Game.prototype.wordArray = function(){
// 	this.currentWord = words[getRandom(word)];
// }

// Game.prototype.guess = function(letter){
// 	//try(letter);
// }

// Game.prototype.isOver = function(){
// 	if(guesses == 0){
// 		return true	
// 	}
	
// Game.prototype.overMessage = function(){
// 	// if currentWord if found
// 		return "You lose"
// 	if (guesses == 0){
// 		return ""
// 	}

// }