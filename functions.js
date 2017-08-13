//function names for questions 1-5
var message = ""
function guessingGame(){
questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
}
function userName(){
  var user = prompt("Hello, what is your name?");
  updatePage("titleName");
  updatePage("userName");
}
function updatePage(elementId) {
  document.getElementById(elementId).innerHTML = message;
}
var correct = 0
var incorrect = 0
//question one (age)
function questionOne() {
      var realAge = 25
      var guessAge = prompt("How old do you think I am?")
      if (guessAge == realAge) {
        message = "<span class='correct'>1.You got it right!! Nice job! I am 25!/span>";
    } else if (guessAge < realAge ) {
        message = "<span class='wrong'>1.Jeez do I look like a baby?</span>";
      }
      else {
          message = "<span class='wrong'>1.Ahhhh thats ice cold!</span>";
        }
      updatePage("questionOne");
    }
//question two (hometown)
function questionTwo() {
    var city = prompt("Where am I from?")
    if (city == "Seattle" || city == "seattle") {
    message = "<span class='correct'>2.That I am, that I am. I was born and raised in South Seattle.</span>";
}   else {
  message = "<span class ='wrong'>2.NO SOUP FOR YOU!</span>"
}
    updatePage("questionTwo");
}
//question three (favorite food)
function questionThree() {
      var food = prompt("What do you think is my favorite food?");
      if (food == "Cheese Enchiladas" || food == "cheese enchiladas"){
    message = "<span class='correct'>3.Those are the best aren't they?</span>";
    } else {
    message = "<span class='wrong'>3.Its okay, that was a tough one anyway.</span>";
    }
        updatePage("questionThree");
    }
//question four (feet)
function questionFour() {
  var feetAmount = 2
  var feet = prompt("How many feet do I have?")
    if (feet == 2) {
    message = "<span class='correct'>4.Correct! I do have two feet. I can breathe a sigh of relief you got that one right.</span>"
  } else if (feet > 2) {
    message = "<span class='wrong'>4.It was worth a shot I guess?</span>"
  } else {
    message = "<span class='wrong'>4.I'm not THAT kind of animal!</span>"
  }
    updatePage("questionFour");
}
//question five (favoriteNumber)
function questionFive() {
    var favoriteNumber = 11
    var number = prompt("What is my favorite number? Here's a hint its between 1 and 15.")
    if (number == 11) {
      message = "<span class='correct'>5.WOW, that is an amazing guess!!</span>"
    } else if (number > 11) {
      message = "<span class='wrong'>5.Ahhhh that was a tough one.</span>"
    } else {
      message = "<span class='wrong'>5.Too low Joe (I know your name isn't Joe it just rhymes).</span>"
    }
    updatePage("questionFive");
}
