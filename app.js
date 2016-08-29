var key = [];
var current_guess = [];
var results = [];

var maxTurns = 10;
var current_turn = 1;

var pegs = {
  0: "red",
  1: "orange",
  2: "yellow",
  3: "green",
  4: "blue",
  5: "purple"
}

var resultPegs = {
  0: "red",
  1: "black"
}

function generateBoard () {
  for (var i = 0; i < maxTurns; i++) {
    $("#guess-board").append("<div class='guess-row'></div>");

    for (var j = 0; j < 4; j++) {
      $(".guess-row").eq(i).append("<div class='guess'></div>");
    }
  }

  for (var i = 0; i < maxTurns; i++) {
    $("#result-board").append("<div class='result-row'></div>");

    for (var j = 0; j < 4; j++) {
      $(".result-row").eq(i).append("<div class='result'></div>");
    }
  }

}


// function Player(name, score) {
//   this.name = name;
//   this.score = score;
// }
//
// function init(){
//
//   var newPlayer = new Player();
//   var newGame = new Game();
//
//   key = generateKey();
//
// }



function generateKey() {
  i = 0;
  while (i < 4) {
    var temp = Math.floor((Math.random() * 6));
    key.push(temp);

    i++;
  }
  return key;
}

function newGuess(event) {
  event.preventDefault();

  current_guess = [];

  $("select").each(function () {
    current_guess.push($(this).val());
  })

  if (hasWon(key, current_guess)) {
    celebration();
  } else {
    reviewMatch(key, current_guess);
  }

  displayGuess();

  current_turn += 1;

  if (current_turn >= 10) {
    console.log("Game over")
    reset();
  }
}

function displayGuess(){
  var guessIndex = -1 * current_turn;

  $(".guess-row").eq(guessIndex).children().each(function(index) {
    $(this).css("background-color", pegs[current_guess[index]]);
  })
}

function displayResults(){
  var resultIndex = -1 * current_turn;

  $(".result-row").eq(resultIndex).children().each(function(index) {
    $(this).css("background-color", pegs[results[index]]);
  })
}


function hasWon(key, current_guess) {
  return key.join("") === current_guess.join("")
}

//   each peg color will have a number assigned to it (1-8);
//   the guesses and key will both be pushed into their separated arrays
//
//   when the user submits their guess, each number will concatenated into string and compared
//
//   if it is a complete match
//     the key will be displayed, the user will receive a celebration and the game will end
//   else if not complete
//     the guess will call on an additional function that will display the user results of the guess`
//
//   ex1:
//     guess = [1,2,3,4]  => '1234';
//     key = [1,2,4,3];   => '1243';
//
//     '1234' !== '1243'
//
//     the check will call on a new function to review matches/mismatches
//
//     2 matches, 2 correct color/wrong pos
//
//     this will be return to the user on the screen via black/white pegs
//     the user will then be prompted to submit a new guess
//
// ex2:
//     guess = [1,2,3,4]  => '1234';
//     key = [1,2,3,4];   => '1234';
//
//     '1234' === '1234'
//
//     the check will display the matched key, increment wins and end game
//     the check will call on a celebration

// var arr1 = [1,2,3,4];
// var arr2 = [1,3,2,4];

function reviewMatch(key, current_guess) {

  results = [];

  for (var i = 0; i < key.length; i++) {
    temp = current_guess.indexOf(key[i]);

    if ((temp !== -1)&&(temp === i)) {
      results.push(1);
    } else if ((temp !== -1) &&(temp !== i)) {
      results.push(0);
    }
  }

  displayResults(results);
}


// run a for loop through the guess and check key index at each var against it.
// if it returns -1
//   no match
// if it returns the same index in both arrs showing an exact match
//   matches will be incremented by one
// else {
//   wrongPos increments by one
// }
//
// return vars

function celebration() {
  console.log("Congratulations! You guessed sequence correctly!")
}

function reset(){
  key = [];
  current_guess = [];
  current_turn = 0;
}


$(document).on("ready", function() {
  generateBoard();
  generateKey();
  $("form").submit(newGuess);

});
