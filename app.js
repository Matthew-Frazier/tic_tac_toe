var choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]

var box1 = document.getElementById("box_1");
var box2 = document.getElementById("box_2");
var box3 = document.getElementById("box_3");
var box4 = document.getElementById("box_4");
var box5 = document.getElementById("box_5");
var box6 = document.getElementById("box_6");
var box7 = document.getElementById("box_7");
var box8 = document.getElementById("box_8");
var box9 = document.getElementById("box_9");
var allBoxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9]

var choices = document.getElementsByClassName("choice")

var userChoice = [];
var compChoice;
var compPick = [];
var winner1 = ["box_1", "box_2", "box_3"];
var winner2 = ["box_4", "box_5", "box_6"];
var winner3 = ["box_7", "box_8", "box_9"];
var winner4 = ["box_1", "box_4", "box_7"];
var winner5 = ["box_2", "box_5", "box_8"];
var winner6 = ["box_3", "box_6", "box_9"];
var winner7 = ["box_1", "box_5", "box_9"];
var winner8 = ["box_3", "box_5", "box_7"];

// Player Wins________________________________________________________________
function userWinner1Fun() {
  if (userChoice.includes(winner1[0]) && userChoice.includes(winner1[1]) && userChoice.includes(winner1[2])) {
    alert("you win");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function userWinner2Fun() {
  if (userChoice.includes(winner2[0]) && userChoice.includes(winner2[1]) && userChoice.includes(winner2[2])) {
    alert("you win");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function userWinner3Fun() {
  if (userChoice.includes(winner3[0]) && userChoice.includes(winner3[1]) && userChoice.includes(winner3[2])) {
    alert("you win");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function userWinner4Fun() {
  if (userChoice.includes(winner4[0]) && userChoice.includes(winner4[1]) && userChoice.includes(winner4[2])) {
    alert("you win");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function userWinner5Fun() {
  if (userChoice.includes(winner5[0]) && userChoice.includes(winner5[1]) && userChoice.includes(winner5[2])) {
    alert("you win");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function userWinner6Fun() {
  if (userChoice.includes(winner6[0]) && userChoice.includes(winner6[1]) && userChoice.includes(winner6[2])) {
    alert("you win");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function userWinner7Fun() {
  if (userChoice.includes(winner7[0]) && userChoice.includes(winner7[1]) && userChoice.includes(winner7[2])) {
    alert("you win");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function userWinner8Fun() {
  if (userChoice.includes(winner8[0]) && userChoice.includes(winner8[1]) && userChoice.includes(winner8[2])) {
    alert("you win");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}
// Computer Wins______________________________________________________
function compWinner1Fun() {
  if (compPick.includes(winner1[0]) && compPick.includes(winner1[1]) && compPick.includes(winner1[2])) {
    alert("Computer Wins");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function compWinner2Fun() {
  if (compPick.includes(winner2[0]) && compPick.includes(winner2[1]) && compPick.includes(winner2[2])) {
    alert("Computer Wins");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function compWinner3Fun() {
  if (compPick.includes(winner3[0]) && compPick.includes(winner3[1]) && compPick.includes(winner3[2])) {
    alert("Computer Wins");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function compWinner4Fun() {
  if (compPick.includes(winner4[0]) && compPick.includes(winner4[1]) && compPick.includes(winner4[2])) {
    alert("Computer Wins");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function compWinner5Fun() {
  if (compPick.includes(winner5[0]) && compPick.includes(winner5[1]) && compPick.includes(winner5[2])) {
    alert("Computer Wins");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function compWinner6Fun() {
  if (compPick.includes(winner6[0]) && compPick.includes(winner6[1]) && compPick.includes(winner6[2])) {
    alert("Computer Wins");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function compWinner7Fun() {
  if (compPick.includes(winner7[0]) && compPick.includes(winner7[1]) && compPick.includes(winner7[2])) {
    alert("Computer Wins");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}

function compWinner8Fun() {
  if (compPick.includes(winner8[0]) && compPick.includes(winner8[1]) && compPick.includes(winner8[2])) {
    alert("Computer Wins");
    for (var i = 0; i < allBoxes.length; i++) {
      allBoxes[i].innerHTML = ""
    }
    userChoice = [];
    compPick = [];
    choiceArr = ["box_1", "box_2", "box_3", "box_4", "box_5", "box_6", "box_7", "box_8", "box_9"]
  }
}


for (var i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    var userPick = this.id;
    for( var i = 0; i < choiceArr.length; i++){ 
      if (choiceArr[i] === userPick) {
        choiceArr.splice(i, 1);
        userChoice.push(this.id);
        var x = document.getElementById("x");
        var copyX = x.cloneNode(true);
        document.getElementById(this.id).appendChild(copyX);
        compChoice = choiceArr[Math.floor(Math.random() * choiceArr.length)]
        for( var i = 0; i < choiceArr.length; i++){ 
          if ( choiceArr[i] === compChoice) {
            choiceArr.splice(i, 1);
            compPick.push(compChoice);
            var o = document.getElementById("o")
            var copyO = o.cloneNode(true)
            document.getElementById(compChoice).appendChild(copyO)
          }
        }
      } 
    }
    userWinner1Fun();
    userWinner2Fun();
    userWinner3Fun();
    userWinner4Fun();
    userWinner5Fun();
    userWinner6Fun();
    userWinner7Fun();
    userWinner8Fun();

    compWinner1Fun();
    compWinner2Fun();
    compWinner3Fun();
    compWinner4Fun();
    compWinner5Fun();
    compWinner6Fun();
    compWinner7Fun();
    compWinner8Fun();
  })
}




