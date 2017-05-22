// Write a function rockPaperScissors which takes the throw of 
// player 1 and the throw of player 2. A throw can have the values 
// if 'rock', 'paper', or 'scissors'. It will return 'player 1' 
// if player 1 wins, 'player 2' if player 2 wins, and 'draw' 
// if there is no winner.

function rockPaperScissors() {
	var playerOne = prompt("Player one please select: rock, paper, scissors");
	var playerTwo = prompt("Player two please select: rock, paper, scissors");
	if (playerOne == 'rock' && playerTwo === 'scissors') {
		console.log("Player one Wins!");
	}
	else if (playerOne == 'rock' && playerTwo == 'paper') {
		console.log("Player two Wins!");
	}
	else if (playerOne == 'paper' && playerTwo == 'rock') {
		console.log("Player one Wins!");
	}
	else if (playerOne == 'paper' && playerTwo == 'scissors') {
		console.log("Player two Wins!");
	}
	else if (playerOne == 'scissors' && playerTwo == 'paper') {
		console.log("Player one Wins!");
	}
	else if playerOne == 'scissors' && playerTwo == 'rock') {
		console.log("Player two Wins!");
	}
	else {
		console.log("It is a draw");
	}

}