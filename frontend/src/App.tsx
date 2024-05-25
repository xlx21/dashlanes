import { useState, } from 'react';
import { IBoardApi } from './api/BoardApi';
import './App.css';

const App: React.FC<AppProps> = ({ boardApi }) => {
  const [boardName, setBoardName] = useState("");
  const [isFetched, setIsFetched] = useState(false);

  const getBoard = async () => {
    try {
      const board = await boardApi.get();
      setBoardName(board.name);
      setIsFetched(true);
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <button onClick={getBoard}>get board</button>
      {isFetched && <p id="boardName">{boardName}</p>}
    </div>
  );
}

class AppProps {
  boardApi!: IBoardApi;
}


export default App;
