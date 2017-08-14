var message = ""
var score = 0
//for yes or no questions
function askQuestion(question, answer, correctMessage, wrongMessage, location){
  var response = prompt(question);
  if(response.toLowerCase() == answer.toLowerCase()){
    message = correctMessage
    score +=1
  } else {
    message = wrongMessage
  }
  updatePage(location);
}
//start of the guessing game
function guessingGame(){
  askQuestion("Am I 25 years old?", "Yes", "<span class='correct'>You hit the nail on the head!</span>",
  "<span class='wrong'>Close but not close enough</span>", "questionOne");
  askQuestion("Was I born on the East Coast?", "No",
  "<span class='correct'>That is correct my friend I was born on the West Coast in Seattle!</span>",
  "<span class='wrong'>Sorry, I was definitely born on the best coast...the WEST COAST!</span>", "questionTwo");
  askQuestion("Did I have cheese enchiladas on EVERY single birthday?", "Yes",
  "<span class='correct'>Yes I did, correct! I loved every minute of it as well.</span>",
  "<span class='wrong'>Incorrect! I had them all the time!</span>", "questionThree");
  askQuestion("Am I a human with four feet?", "No", "<span class='correct'>Phew you got that one right.</span>",
  "<span class='wrong'>Aww come on that one was a gimme!</span>", "questionFour");
  askQuestion("Is my favorite number the same as the day of my birthday?", "Yes",
  "<span class='correct'>You betcha'! My favorite number is 11.</span>",
  "<span class='wrong'>Nope. 11 is my favorite number and it is such a cool one!", "questionFive");
}
function updatePage(elementId) {
  document.getElementById(elementId).innerHTML = message;
}
