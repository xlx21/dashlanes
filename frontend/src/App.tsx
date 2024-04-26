import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [boardName, setBoardName] = useState("");

  const getBoard = () => {
    fetch("http://localhost:5284/board")
      .then(res => res.json())
      .then(board => setBoardName(board.name))
      .catch(err => console.error(err))
  }

  return (
    <div className="App">
      <button onClick={getBoard}>get board</button>
      <p>{boardName}</p>
    </div>
  );
}

export default App;
