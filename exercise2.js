var askPlay = "Do you want to play?";
var askPlay2 = "Do you want to play again?";
var askWord = "Enter a word";
var wordString = "";

var play = prompt(askPlay, "yes or no?");
if (play == "yes") {
	do {
  	var word = prompt(askWord);
    wordString += " " + word;
    play = prompt(askPlay2, "yes or no?");
	} while (play == "yes");
  console.log(wordString);
}
else {
var no = console.log("maybe next time");
}
