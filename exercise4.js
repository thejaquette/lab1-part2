var askTime = "What time of day is it?";
var morning = {
	meal: "breakfast",
  food: "eggs & toast"
}
var noon = {
	meal: "lunch",
  food: "a salad"
}
var evening = {
	meal: "dinner",
  food: "chicken & rice"
}

var time = prompt(askTime, "morning, noon, or evening?");

if (time == "morning") {
console.log("Since it is " + time + ", you should be eating " + morning.meal + ". We suggest " + morning.food + ".");
}

else if (time == "noon") {
console.log("Since it is " + time + ", you should be eating " + noon.meal + ". We suggest " + noon.food + ".");
}

else if (time == "evening") {
console.log("Since it is " + time + ", you should be eating " + evening.meal + ". We suggest " + evening.food + ".");
}

else {
console.log("Sorry, please try again and enter either morning, noon, or night.");
}
