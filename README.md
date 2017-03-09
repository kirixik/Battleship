# Battleship
Play game: https://kirixik.github.io/Battleship/

## Overview
In Battleship, the computer has positioned five ships of various sizes on a 10x10 board. Each ship placed horizontally or vertically, completely on the board, without overlapping another ship. The player cannot see the ship locations. Each round, the player 'fires' at a board position of his choosing. The computer indicates if this was a 'hit' or a 'miss'. When all tiles of a particular ship have been hit, the computer indicates that the entire ship has been sunk. When the player has sunk all of the ships, the game is over. 
https://en.wikipedia.org/wiki/Battleship_(game)

## Running Locally

1. Clone this repository: git clone https://github.com/kirixik/Battleship.git
2. Open the root directory of your cloned repository as the project root
3. npm install
4. npm start
5. Open http://localhost:3000/

## Run tests

1. Open the root directory of your cloned repository as the project root
2. npm install
3. npm test

## Supported Browsers

Latest versions of Chrome, Firefox, Safari, Microsoft Edge

## Technologies

1. React to create interactive UIs
2. Redux as  predictable state container for JavaScript apps
3. Enzyme used for testing 
4. HTML, CSS used for markup

#Gameplay

## First move
To play as first player click at any cell on the board

## Hit/Miss/Sunk
After clicking on board you will see X mark: 
* red color - hit the ship
* gray color - miss
When you sunk entire ship you will see X marks on the right side of the appropriate ship image

## Restart
To restart you should sunk all of the ships on the board and click on modal window with 'Game Over' label
