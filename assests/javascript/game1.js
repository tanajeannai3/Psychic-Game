var word = [
    "serenade", 
    "highest in the room", 
    "impossible", 
    "butterfly effect",];
var randomWord = word[Math.floor(Math.random() * word.length)];
var answerArray = [];
var wrongGuess = [];
var leftGuesses = 10;
var wins = 0;
var losses = 0;

for(var i = 0; i < word.length; i++){
    answerArray[i] = '_';
}//END 1st FOR LOOP 

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(randomWord);
    
    for(var j = 0; j < randomWord.length; j++){
        
    }//END 2ND FOR LOOP 

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var userChoiceText = document.getElementById("userchoice-text");
    var remainingLettersText = document.getElementById("remainingGuesses-text");
    userChoiceText.textContent = "Letters Already Guessed: " + userGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    remainingLettersText.textContent = "Number of Guesses Remaining:" + remainingGuesses;
};//END DOC 