//alert("hi")
var user = 0;
var comp = 0;
var playing = confirm("Do you want to play Rock, Paper, Scissors?");
var moves = ["rock", "paper", "scissors"];


while(playing == true)
{
	var play = moves[Math.floor((Math.random() * 3))];
	var userMove = prompt("Make your move!");
	console.log("the computer chose " + play);
	

	if(userMove == play)
	{
		alert("It's a tie!");
	} else if(userMove == 'rock'){ //if the user chooses rock, check against comp
		if(play == 'paper'){
			alert('computer wins');
			comp++;
		} else if(play == 'scissors'){
			user++; 
		}
	} //if the user chooses paper

	// if(userMove == 'rock')
	// {
	// 	if(play == moves[2])
	// 	{
	// 		user += 1;
	// 		alert("Your score: " + user + " Computer score: " + comp);
	// 	}
	// 	else
	// 	{
	// 		comp += 1;
	// 		alert("Your score: " + user + " Computer score: " + comp);
	// 	}
	// }

 playing = confirm("Do you want to play again?");	
}

alert("Thanks for playing");
