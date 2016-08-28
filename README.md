# my-game


<!--
Creator: <Name>
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Mastermind

### User Stories & Game Mechanics
1. A user can see peg color options and slots.
2. A user can submit their guess.
3. A user can see the result of their guess.
4. A user can hit keys on the keyboard to select their guesses.
5. A user reset the game at any point.

### Data Structures for "Memory" (Independent Practice)

**Pegs**


**Key**
  - `answer` (string)
  - `genKey()` (Function - create a key)
  - `randomize()` (Function - randomizes the Key)

**Player**
  - `name` (Card)

  - `score` (string)

**Board**
- `Pair()` (Function - constructor, create an empty pair)


**Game**
  - `init()` (Function - start game and set board)
  - `current_guess` (array of selections)
  - `check()` (Function - eventListener for key will move the vehicle across the track)
  - `pegs` ([Peg])
  - `reset()` (Function - resets the game!)
  - `hasWon()` (Function - check if the game has been won!)
  - `celebrate()` (Function - display a win message)
</details>

### Development Stories

1. A user can see a set of peg options to select.
  * Create HTML structure to display the pegs and board on screen (Handlebars?).

2. A user can select a vehicle to drive.
  * Add click event listener to the vehicles that:
     - highlights the border of the vehicle (`selectVehicle`)
     - creates the player's vehicle and places it onto the Racetrack (`genVehicle` don't add the same vehicle twice)

3. If the user flips two matching cards face-up at the same time, the cards will be removed from the game.
  * Assuming `isMatch()` gave true for the current pair:
    - set a short timer so the user can see that the cards matched (`setTimeout`), then...
    - replace each card in the pair with a "blank space" image to let user know it's been removed
    - use `off` to take off the click event listener from both cards
    - remove both cards from the game's list of cards

4. If the user flips two non-matching cards face-up at the same time, both cards will turn back face down.
  * Assuming `isMatch()` gave false for the current pair:
    - set a short timer so the user can see the cards (`setTimeout`), then...
    - flip each card in the pair back over so they're face-down

5. The user wins when they've matched all the cards!
  * Every time there is a match, the Game should also check if its cards array is now empty. (`hasWon`)
  * If so, show a win screen (`celebrate`)


###Potential Challenges / Development Questions

1. How to randomize or shuffle card locations at the beginning of the game?
2. How to ensure that all the cards have matches?
3. How to change the image for a card that's face-down, face-up, or matched and removed from game?
4. Is there a way to hide the identity of a card even from users who know how to use the Chrome dev tools?
5. Cool card flip animation?!

### Deliverable

Design user stories, data structures, development stories, and potential challenges for a **racing game** in which two players use the keyboard to control "cars" that race across the screen.

Here are some popular bonus features that would affect your data structure plan:

1. How would you make your player's "cars" use custom images?
2. Can a player type in their name to see custom win messages?
3. Can you enable a reset button to restart the race?
4. How about a win counter that spans across multiple races?

As you work, you can edit this README to add a section at the top with your name, a link to the original repository, and a 3-5 sentence reflection on completing this assignment. Push your updates to GitHub and add a link to the repo to the "My Work" section of your website!
