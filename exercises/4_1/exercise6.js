let piece = 'bishop';
switch (piece.toLowerCase()) {
  case 'knight':
    console.log('Move in an L shape: two squares in a horizontal or vertical direction, then move one square horizontally or vertically');
    break;
    case 'rook':
    console.log('Move horizontally or vertically any number of squares');
    break;
    case 'king':
    console.log('Move one square in any direction');
    break;
  case 'queen':
    console.log('Move diagonally, horizontally, or vertically any number of squares');
    break;
  case 'bishop':
    console.log('Move diagonally any number of squares');
    break;
  default:
    console.log('Move vertically forward one square, with the option to move two squares if they have not yet moved');
}