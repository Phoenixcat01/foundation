import { useState } from 'react'


function Square ({value, onSquereClick}) {

  return <button className="square" onClick={onSquereClick}>{value}</button>
}

export default function Board() {
  const [squeres, setSqueres] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true);

  function handleSquereClick(i) {
    if (squeres[i]) return;
    const nextSqueres = squeres.slice();
    // if(xIsNext) {
    //   nextSqueres[i] = 'x';
    // } else {
    //   nextSqueres[i] = 'o';
    // }
    nextSqueres[i] = xIsNext ? 'x' : 'o';
    setSqueres(nextSqueres);
    setXIsNext(!xIsNext);
  }

  return (
    <>
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
