// https://www.codewars.com/kata/525caa5c1bf619d28c000335/javascript
// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current
// state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the
// value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished AND no one has won yet (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe.

export default function isSolved(matrix = []) {
  const isOneRowWin = (matrix = [], value = 1) => {
    for (let i = 0; i < matrix.length; i++) {
      const isRowWin = matrix[i].every((rowItem) => rowItem === value)
      if (isRowWin) {
        return true
      }
    }
    return false
  }
  const isObliquelyWin = (matrix = [], value = 1) => {
    let result
    for (let i = 0; i < matrix.length; i++) {
      const element = matrix[i][i]
      if (result === undefined) {
        result = element === value
      } else {
        result = result && element === value
      }
    }
    return result
  }
  const isBackObliquelyWin = (matrix = [], value = 1) => {
    let result
    for (let i = 0; i < matrix.length; i++) {
      const element = matrix[i][matrix.length - 1 - i]
      if (result === undefined) {
        result = element === value
      } else {
        result = result && element === value
      }
    }
    return result
  }
  const isThereAreEmptySpots = (matrix = []) => {
    let result
    for (let i = 0; i < matrix.length; i++) {
      result = matrix[i].includes(0)
      if (result) {
        break
      }
    }
    return result
  }

  const isXWin =
    isOneRowWin(matrix, 1) ||
    isObliquelyWin(matrix, 1) ||
    isBackObliquelyWin(matrix, 1)
  if (isXWin) {
    return 1
  }
  const isOWin =
    isOneRowWin(matrix, 2) ||
    isObliquelyWin(matrix, 2) ||
    isBackObliquelyWin(matrix, 2)
  if (isOWin) {
    return 2
  }
  if (isThereAreEmptySpots(matrix)) {
    return -1
  }

  return 0
}
