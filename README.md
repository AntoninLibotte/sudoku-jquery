# sudoku-jquery
A basic sudoku demo made in jQuery.

## About personal projects...
*I put my old personal projects on GitHub for archiving and memories. I like to see what I did in the past, how I did it, and how much I learned since then. Sometimes, I can also learn new things by looking back at old stuff and thinking about it.*

## About this project
I made this demo years ago when I was learning web development. More specifically, it is a personal project I made while we were learning jQuery at school (I don't really use jQuery).

**A more recent demo, improved and made in pure JavaScript, can be found [here](https://github.com/AntoninLibotte/sudoku).**

## Features
- Highlights the column, row and square (slightly) of the selected cell;
- Displays the conflicts of the selected cell;
- Allows to write 'guesses' (multiple digits) in a cell:
  - They are displayed in a smaller font size;
  - They are not used when checking for conflicts;
- 'Verify' button which starts an automatic validation of the grid (it would work with any grid, the results are not encoded).

## Limitations
- The grid is hardcoded in HTML;
- There is no way to load a grid, even though the validation system would work with any grid;
- The validation system:
  - It works by simulating user interactions with the UI (focusing every cell);
  - It doesn't give any feedback on what's wrong in an invalid grid;
- No custom keyboard navigation;
- 9x9 grids only.
