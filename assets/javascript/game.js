var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var computerPick = letters[Math.floor(Math.random() * letters.length)];
console.log(computerPick);

var wins = 0;
var losses = 0;
var guessesLeft = 9;


document.onkeyup = function(event) {
	 var userGuess = event.key;
	 console.log(userGuess);

	 	
	 	if (userGuess === computerPick) {
	 			 wins++;
	 	    document.getElementById("wins-display").textContent = wins;
	 	    document.getElementById("guesses-left").innerHTML = 9;
	 	      computerPick = letters[Math.floor(Math.random() * letters.length)];
	 	      console.log(computerPick);
	 	     document.getElementById("user-guesses").innerHTML = "";
	 	         guessesLeft = 9;
  	 		}
	 	      
	 	 else if (userGuess !== computerPick) {
			
				guessesLeft--;

				document.getElementById("user-guesses").innerHTML = document.getElementById("user-guesses").innerHTML  + event.key + " , ";
					
		if (guessesLeft <= 0){

				losses++;
				guessesLeft = 9;
				computerPick = letters[Math.floor(Math.random() * letters.length)];
	 	      console.log(computerPick);
	 	      document.getElementById("user-guesses").innerHTML = "";
				}

					document.getElementById("guesses-left").innerHTML = guessesLeft;
					document.getElementById("losses-display").innerHTML = losses;			
	}
}

