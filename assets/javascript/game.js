//generate a random number in the answer div
var rightAnswer = Math.floor(Math.random() * (120 - 19) + 1) + 19;
$("#answer").text(rightAnswer);
console.log(rightAnswer);

var crystalGame = {
	wins: 0,
	losses: 0,
	total: 0,
	guessNumber: 0,
	newGame: function(){
	}
	
}
//give each crystal a random number value
var crystal = [{'name':"blue",'value':0}, {'name':"red",'value':0}, {'name':"rainbow",'value':0}, {'name':"clear",'value':0}];
for (var i = 0; i < crystal.length; i++ ) {
	var guess = (Math.floor(Math.random() * 12) + 1);
  	crystal[i].value = guess;	
	console.log(guess);
}
//update html with current numbers
$("#guess").text("Your Number: " + crystalGame.guessNumber);
$("#wins").text("Wins: " + crystalGame.wins);
$("#losses").text("Losses: " + crystalGame.losses);



