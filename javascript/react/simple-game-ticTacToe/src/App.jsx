import { useState } from 'react'


function Square ({value, onSquereClick}) {

  return <button className="square" onClick={onSquereClick}>{value}</button>
}

function calculateWinner(squeres) {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  for (let i = 0; i < lines.length; i++) {
    // const a = lines[i][0]; // 0
    // const b = lines[i][1]; // 1
    // const c = lines[i][2]; // 2
    const [a,b,c] = lines[i];

    if (squeres[a] && squeres[a] === squeres[b] && squeres[a] === squeres[c]) {
      return squeres[a];
    }
  }

  return false;
}

export default function Board() {
  const [squeres, setSqueres] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true);

  function handleSquereClick(i) {
    if (squeres[i] || calculateWinner(squeres)) return;
    const nextSqueres = squeres.slice();
    // if(xIsNext) {
    //   nextSqueres[i] = 'x';
    // } else {
    //   nextSqueres[i] = 'o';
    // }
    nextSqueres[i] = xIsNext ? 'X' : 'O';
    setSqueres(nextSqueres);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squeres);
  console.log(winner)
  let status = '';
  if (winner) {
    status = `The Winner is : ${winner}`;
  } else {
    const allSquaresFull = squeres.every(Square => Square !== null);
    if (allSquaresFull) {
      status = `Draw!`
    } else {
      status = `Next Player is : ${xIsNext ? 'X' : 'O'}`;
    }
  } 

  return (
    <>
    <div className="status">{status}</div>
    <div className="board">
      
      <Square value={squeres[0]} onSquereClick={() => handleSquereClick(0)} />
      <Square value={squeres[1]} onSquereClick={() => handleSquereClick(1)}/>
      <Square value={squeres[2]} onSquereClick={() => handleSquereClick(2)}/>
      <Square value={squeres[3]} onSquereClick={() => handleSquereClick(3)}/>
      <Square value={squeres[4]} onSquereClick={() => handleSquereClick(4)}/>
      <Square value={squeres[5]} onSquereClick={() => handleSquereClick(5)}/>
      <Square value={squeres[6]} onSquereClick={() => handleSquereClick(6)}/>
      <Square value={squeres[7]} onSquereClick={() => handleSquereClick(7)}/>
      <Square value={squeres[8]} onSquereClick={() => handleSquereClick(8)}/>

    </div>
    </>
  )
};
