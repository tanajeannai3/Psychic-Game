var word = [
    "serenade", 
    "HITR", 
    "impossible", 
    "antidote",];
var randomWord = word[Math.floor(Math.random() * word.length)];
var answerArray = [];
var wrongGuess = [];
var wins = 0;
var losses = 0;

var leftGuesses = 10;
var ele = document.getElementById('remaining');
ele.innerHTML=leftGuesses;

for(var i = 0; i < word.length; i++){
    answerArray[i] = '_';
}//END 1st FOR LOOP 

document.onkeyup = function(event) {
    var userGuess = event.key;
    console.log(randomWord);
    
    for(var j = 0; j < randomWord.length; j++){
        if(randomWord[j]===userGuess){
            answerArray[j]=userGuess;
        }
    }//END 2ND FOR LOOP 

    if(userGuess !== randomWord[j]){
        wrongGuess.push(userGuess);
        leftGuesses--;
        var wg = document.getElementById('wrong');
        wg.innerHTML=wrongGuesses;
    }
    if(leftGuesses == 0){
        console.log("You loser...")
    }
    if(answerArray == randomWord){
        console.log("You are so right!");
    }

    var el = document.getElementById('guessword');
    el.innerHTML=guessComposer.join(" ");

    var ele = document.getElementById('remaining');
    ele.innerHTML=guessesLeft;

    var winsText = document.getElementById("wins-text");
    var lossesText = document.getElementById("losses-text");
    var userChoiceText = document.getElementById("userchoice-text");
    // var remainingLettersText = document.getElementById("remainingGuesses-text");
    userChoiceText.textContent = "Letters Already Guessed: " + userGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    // remainingLettersText.textContent = "Number of Guesses Remaining:" + remainingGuesses;
};//END DOC 