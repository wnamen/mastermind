var key = [];



function Game() {


}

function Player(name, score) {
  this.name = name;
  this.score = score;
}

function init(){



}

$(document).on("ready", function(event) {

  // var pegs = {
  //   red: 1,
  //   orange: 2,
  //   yellow: 3,
  //   green: 4,
  //   blue: 5,
  //   purple: 6,
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


  function hasWon(key, current_guess) {

    if (key.join("") === current_guess.join("")) {
      return celebration()
    } else {
      return reveiwMatch(key, current_guess);
    }

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

    var matches = 0;
    var wrongPos = 0;

    for (var i = 0; i < key.length; i++) {
      temp = current_guess.indexOf(key[i]);

      if ((temp !== -1)&&(temp === i)) {
        matches += 1;
      } else if ((temp !== -1) &&(temp !== i))
        wrongPos += 1;
      }

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

    function celebrate() {
      console.log("Congratulations! You guessed sequence correctly!")
    }

    function reset(){
      key = [];
    }



});
