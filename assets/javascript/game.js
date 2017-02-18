var crystalGame = {
	rightAnswer: Math.floor(Math.random() * (120 - 19) + 1) + 19,
	wins: 0,
	losses: 0,
	guessNumber: 0,
	gameOver: false,
  	message: "",
	newGame: function(){
    this.rightAnswer = Math.floor(Math.random() * (120 - 19) + 1) + 19;
    $("#answer").text(this.rightAnswer);
    this.guessNumber = 0;
    this.updateScore();
    this.gameOver = false;
  },
  updateScore: function() {
    $("#message").text(this.message);
    $("#guess").text("Your Number: " + this.guessNumber);
    $("#wins").text("Wins: " + this.wins);
    $("#losses").text("Losses: " + this.losses);
  }
	
}
crystalGame.newGame();

//give each crystal a random number value
var crystal = [{name:"blue",value:0}, {name:"red",value:0}, {name:"rainbow",value:0}, {name:'clear',value:0}];
for (var i = 0; i < crystal.length; i++ ) {
	var guess = (Math.floor(Math.random() * 12) + 1);
  	crystal[i].value = guess;
  	console.log(guess);

//apply click function to all crystal divs
  $('#'+ crystal[i].name).click(function(){
  	var crystalColor = $(this).attr('id');
  	var crystalObject = crystal.find(function(color) {
  		if (color.name == crystalColor) {
  			return color;
  		}
  	})
  	crystalGame.guessNumber += crystalObject.value; 
  	$('#guess').html("Your Number: " + crystalGame.guessNumber);


  	if (crystalGame.guessNumber === crystalGame.rightAnswer) {
  		crystalGame.wins++;
  		crystalGame.message = "YOU WIN! :D Click anywhere to play again.";
      crystalGame.updateScore();
  		crystalGame.gameOver=true;
  	} else if (crystalGame.guessNumber > crystalGame.rightAnswer) {
  		crystalGame.losses++;
  		crystalGame.message = "YOU LOSE! D: Click anywhere to play again.";
      	crystalGame.updateScore();
  		crystalGame.gameOver=true;
  	}
  })
}
	
$('button').click(function() {
	if (crystalGame.gameOver)  {
		crystalGame.newGame();
		}
    })
