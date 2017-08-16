var choice = "";
function getRand(min, max){
	min = Math.ceil(min);
	max = Math.floor (max);
	var num = Math.floor(Math.random() * (max-min)) + min; 
		if(num === 1){
			return "rock";
		}else if (num === 2){
			return "paper";
		}else {
			return "scissors";
		}
}

function playRound(userC, choice) {
	if (userC === choice) {
		alert("You and the computer have both selected " + choice + ". You tie!");
	} else if(userC === "rock" && choice === "scissors"){
		alert("You chose rock and the computer chose scissors. You win!");
	} else if(userC === "paper" && choice === "rock"){
		alert("You chose paper and the computer chose rock. You win!");
	} else if(userC === "scissors" && choice === "paper"){
		alert("You chose scissors and the computer chose paper. You win!");
	} else {
		alert("You chose " + userC + ", but the computer chose " + choice + ". You lose.");
	}
}

$('#rock').click(function(){
	choice = getRand(1,4);
	playRound("rock", choice);
	//how to how computer check and compare function?
});

$('#paper').click(function(){
	choice = getRand(1,4);
	playRound("paper", choice);
});

$('#scissors').click(function(){
	choice = getRand(1,4);
	playRound("scissors", choice);
});



