// You're going to make a game just like the one in the video. Essentially, the app randomly picks a letter, and the user has to guess which letter the app chose. Put the following text on your page:
// Guess what letter I'm thinking of
// Wins: (# of times the user has guessed the letter correctly)
// Losses: (# of times the user has failed to guess the letter correctly after exhausting all guesses)
// Guesses Left: (# of guesses left. This will update)
// Your Guesses So Far: (the specific letters that the user typed. Display these until the user either wins or loses.)
// When the player wins, increase the Wins counter and start the game over again (without refreshing the page).
// When the player loses, increase the Losses counter and restart the game without a page refresh (just like when the user wins).


// variables

var lettersArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerLetter = lettersArray[Math.floor(Math.random()*lettersArray.length)];
    console.log(computerLetter);
var userGuessArray = [];
var userWins = 0;
var userLoss = 0;
var guessesLeft = 10;

// functions

function scoreUpdate() {
  $("#game").html(`<h2> Guess what letter I'm thinking of...<br>
    Your Wins: ` + userWins + `<br>
    Your Losses: ` + userLoss + `<br>
    Guesses Left: ` + guessesLeft + `<br>
    Your Guess: ` + userGuessArray + ` </h2>`);

};


function startGame() {
 
 $("#game").html("<h1>This is The Psychic Game.<br> Can you guess the letter I'm thinking of? <br> Press any key!</h2>");

  document.onkeyup = function(event) {

  scoreUpdate();
  checkLetter();

  }
};


function endgame() {
  
  $("#game").html("<h1> Do you want to play again? <br><br> Press any key!</h2>");

  document.onkeyup = function(event) {
    userGuessArray = [];
    guessesLeft = 10;

    scoreUpdate();
    checkLetter();
}
};





function checkLetter() {
   document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(userGuess);
    
   
 
    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" ||
        userGuess === "f" || userGuess === "e" || userGuess === "g" || userGuess === "h" ||
        userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" ||
        userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" ||
        userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" ||
        userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" ||
        userGuess === "y" || userGuess === "z") 

      {  
                    guessesLeft --;
                    userGuessArray.push(userGuess);
                    scoreUpdate();

          
  

                    if (userGuess === computerLetter) {
                      userWins++; 
                      scoreUpdate();
                      alert("You guessed right! It is " + computerLetter)
                      endgame();   
                      }

                    else if (guessesLeft === 0) {
                      userLoss++;
                      scoreUpdate();
                      alert("You lost!");     
                      endgame();
                      }
           
        
      }
      else {
            alert("Please press the letter key");
      }

}
};

startGame();