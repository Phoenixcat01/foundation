/*
*Application Workflow (Flow)
*
* 1. State Management: The Game Component manages three main states: * history (board history), xIsNext (turn), and currentMove (active move).
* 2. Pass Props: The game passes the relevant state (squares & xIsNext) to the Board
* via props. The Board is a "view" component that only displays the UI.
*
* 3. User Interaction: When a square is clicked on the Board, the Board calls onPlay,
* sending the updated board back to the Game.
*
* 4. State Update: The game updates history, currentMove, and xIsNext.
* This triggers an automatic re-render and updates the UI.
*
* 5. Move History: The game uses the history array to create a list of
* "jump to move" buttons. Clicking these buttons updates currentMove
* and takes the player back to that move.
*/

import { useState } from 'react'

// Functional component for a single box.
// It accepts a value ('X' or 'O') and a function to call when clicked.
function Square ({value, onSquereClick}) {
  return <button className="square" onClick={onSquereClick}>{value}</button>
}

// Helper function to check if there is a winner
function calculateWinner(squeres) {
  // All possible winning lines
  const lines = [
    [0,1,2], [3,4,5], [6,7,8], // horizontal lines
    [0,3,6], [1,4,7], [2,5,8], // vertikal lines
    [0,4,8], [2,4,6], //diagonal lines
  ];

  // Loop to check each winning line
  for (let i = 0; i < lines.length; i++) {
    // Use destructuring to get indices a, b, and c
    const [a,b,c] = lines[i];
    
    // Check if the first box is not empty AND all three boxes have the same value
    if (squeres[a] && squeres[a] === squeres[b] && squeres[a] === squeres[c]) {
      // If yes, return the winning value ('X' or 'O')
      return squeres[a];
    }
  }

  // If there is no winner, return null.
  // Note: Returning `null` is more common in React for "nothing".
  return null;
}

// Functional component for the game board
// It accepts props to know whose turn it is, the board state, and a function to play it.
function Board({xIsNext, squeres, onPlay}) {

  // Function called when a box is clicked
  function handleSquereClick(i) {
    // Check if the box is filled or if there is a winner, if yes, exit the function.
    if (squeres[i] || calculateWinner(squeres)) return;

    // Make a copy of the state array to avoid direct mutation.
    const nextSqueres = squeres.slice();
    
    // Determine the symbol ('X' or 'O') based on the player's turn.
    nextSqueres[i] = xIsNext ? 'X' : 'O';

    // Call the `onPlay` function received from `Game`,
    // to notify the parent component that the board has been updated.
    onPlay(nextSqueres)
  }

  // Call helper function to check winner
  const winner = calculateWinner(squeres);
  // This code will print the result to the browser console
  console.log(winner)

  let status;
  // Logic to determine game status
  if (winner) {
    status = `The Winner is : ${winner}`;
  } else {
    // Check if all boxes are filled for Draw status
    const allSquaresFull = squeres.every(Square => Square !== null);
    allSquaresFull ? status = `Draw!` : status = `Next Player is : ${xIsNext ? 'X' : 'O'}`;
  } 

  // Render the game board UI
  return (
    <>
    <div className="status">{status}</div>
    <div className="board">
      
      {squeres.map((value, i) => (
        <Square 
          key={i}
          value={value}
          onSquereClick={() => handleSquereClick(i)}/>
      ))}
    </div>
    </>
  )
};

// The main component of the application, which manages the overall game state
export default function Game() {
  // State to save game board history
  const [history, setHistory] = useState([Array(9).fill(null)])
  // State to track the step currently being viewed
  const [currentMove, setCurrentMove] = useState(0)
  // Get the current board state from history based on currentMove
  const currentSqueres = history[currentMove];
  // Determine turns based on parity of move number
  const xIsNext = currentMove % 2 === 0;

  // Function to return to the previous step
  function jumpTo (nextMove) {
    setCurrentMove(nextMove);
  }

  // Function called from Board to update the game state
  function handlePlay(nextSqueres) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSqueres];
    setHistory(nextHistory);
    // Update current step to last step
    setCurrentMove(nextHistory.length -1)
  }

  // Create a list of buttons for the step history
  const moves = history.map((squeres, move) => {
    let description;
    move > 0 ? description = `Move to # ${move} !` : description = `Go to Start!`;

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  // Function to reset the game to its initial state
  function handleRestart () {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  // Renders the main UI of the application
  return (
    <div className="game">
    <div className="game-board">
      {/* Pass state and functions as props to the Board component */}
      <Board xIsNext={xIsNext} squeres={currentSqueres} onPlay={handlePlay}/>
    </div>
    <div className="game-info">
      <ol>
        {moves}
      </ol>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  </div>
  )
}
