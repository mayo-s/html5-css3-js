window.onload = function(){

	var rock = document.getElementById("rock");
	var paper = document.getElementById("paper");
	var scissors = document.getElementById("scissors");

	// default visibility = hidden setup in css
	// var hideRps = function(){
	// document.getElementById("rps").style.visibility = "hidden"; 
	// }
	// 
	// hideRps;

	rock.onclick = function() { rockPaperScissors("rock");};
	paper.onclick = function() { rockPaperScissors("paper");};
	scissors.onclick = function() { rockPaperScissors("scissor");};

	var rockPaperScissors = function(userChoice){
		
		var computerChoice = Math.random();
		if (computerChoice < 0.34) {
			computerChoice = "rock";
		}
		else if(computerChoice <= 0.67) {
			computerChoice = "paper";
		}
		else {
			computerChoice = "scissors";
		} 
		alert("You: " + userChoice + "\n" + "Computer: " + computerChoice);

		var compare = function(userChoice, computerChoice){
			if(userChoice === computerChoice){ 
				alert("The result is a tie!");
				return "The result is a tie!";   
			}
			else if(userChoice === "rock"){
				if(computerChoice === "scissors"){ 
					alert("ROCK WINS");
					return "rock wins";
				}
				else{ 
					alert("PAPER WINS");
					return "paper wins";
				}
			}
			else if(userChoice === "paper"){
				if(computerChoice === "scissors"){ 
					alert("SCISSORS WINS");
					return "scissors wins";
				}
				else{			 
					alert("PAPER WINS");
					return "paper wins";
				}
			}
			else if(userChoice === "scissors"){
				if(computerChoice === "rock"){			 
					alert("ROCK WINS");
					return "rock wins";
				}
				else{ 
					alert("SCISSORS WINS");
					return "scissors wins";
				}
			}    
		};
		compare(userChoice, computerChoice);
	}

	function showRps(event) {
		document.getElementById("rps").style.visibility = "visible";
		event.preventDefault();
		return false;
	}

	function hideRps(){
		document.getElementById("rps").style.visibility = "hidden"; 
	}

	document.addEventListener("submit", showRps);

}