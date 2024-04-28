import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [boardName, setBoardName] = useState("");
  const [isFetched, setIsFetched] = useState(false);

  const getBoard = () => {
    fetch("http://localhost:5284/board")
      .then(res => res.json())
      .then(board => setBoardName(board.name))
      .catch(err => console.error(err))
    setIsFetched(true);
  }

  return (
    <div className="App">
      <button onClick={getBoard}>get board</button>
      {isFetched && <p id="boardName">{boardName}</p>}
    </div>
  );
}

export default App;
