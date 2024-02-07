# Rock Paper Scissors Game


## The Game
The game is simply Rock, Paper, Scissors. The user can win, lose or draw on each round. After five rounds the scores are added up. Due to the potential for draws in rounds, the final score can also be a win, loss or draw. This is a simple and intuitive version of a classic game.

## Build
The game is mostly built of Javascript, with the few structural HTML components being populated by DOM elements created in Javascript. This keeps nearly all of the functional aspects of the game within the app.js file. 

## Features
* Elements created from Javascript objects, or from within functions
* Buttons which appear once the game begins and remain until reset
* Auto-populating list of round results
* After five rounds a game result is produced, showing total scores
* Automatic disabling of game elements once game is finished
* Restart button, which resets the game and re-enables disabled elements
* Quit button which resets the game and unhides a html section. The user is able to re-enter the game from here
* A link to the original text-based version of this game, which served as the inspiration for this one. This can be accessed via the Quit button

## Expected Future Updates
### Different Game Modes
It would be possible to implement a choice of game mode for the user. For example, the user could choose "Best of Three" or "Best of Five". This would not be too difficult to implement, as instead of the game counting up to five rounds in order to end, it could count scores until one player reaches a winning number.

### Refactoring
I believe I can refactor the code to be more efficient, by pushing my Rock, Paper and Scissors elements into an empty array while creating them in my For Of loop. This will not give a functional improvement, but may clean up my code and prevent repetition. As this game relies on only three gameplay elements this is not a pressing matter, however apps with more interactive elements would benefit from this improvement. With this in mind, some of the page element creation could be done by loops or functions as well. 

There is also the option of removing the "game-over" screen from the HTML file. Currently it loads with the page, but is hidden with "display: none" until revealed by Javascript. It could be considered neater and more modular to remove this entirely from the HTML file and create it in Javascript.

## Known Issues
As of yet this web app is not responsive, and is designed for laptop-sized screens and up.

## Learning Outcomes
During the course of development I encountered some scenarios that were new to me. I learned:
* How to create a function that can be executed only once, as seen here with the Restart and Quit buttons. Once the game has begun they are produced, but the function is curbed to prevent repeats.
* How to build an out for the above "single-use" function. My Restart button needed to remove itself from the DOM, as well as the Quit button and all results, then allow the button creation function to work again. 