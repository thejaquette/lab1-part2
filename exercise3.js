var askPlay = "Would you like to print your name?";
var askName = "Enter your name";
var howMany = 1;

var play = prompt(askPlay, "yes or no?");
if (play == "yes") {
	var nameString = prompt(askName);
	while (play == "yes") {
   if (howMany == 1) {
   console.log(nameString);
   howMany++;
   }
   else {
   play = prompt(askPlay, "yes or no?");
   nameString += "!";
   console.log(nameString);
  }
  }
}

else {
var no = console.log("maybe next time");
}
