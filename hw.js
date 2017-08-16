$('#rock').click(function(){
	userC = "rock";
	alert("You have selected rock");
	//how to how computer check and compare function?
});

$('#paper').click(function(){
	alert("You have selected paper");
	userc = "paper";
});

$('#scissors').click(function(){
	alert("You have selected scissors");
	userC = "scissors";
});

function getRand(min, max){
	min = Math.ceil(min);
	max = Math.floor (max);
	num = return Math.floor(Math.random() * (max-min)) + min; 
		if(num = 1){
			choice = "rock"
		}else if (num = 2){
			choice = "paper"
		}else {
			choice = "scissors"
		}
}	
console.log(choice)	