import { useState, } from 'react';
import { IBoardApi, Board } from './api/BoardApi';
import './App.css';

const App: React.FC<AppProps> = ({ boardApi }) => {
  const [board, setBoard] = useState<Board | null>(null);

  const getBoard = async () => {
    try {
      const board = await boardApi.get();
      setBoard(board);
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="App">
      <button onClick={getBoard}>get board</button>
      {board != null &&
        <div id="board">
          <h1 id="boardName">{board.name}</h1>
          {board.lanes.map((lane, i) => (
            <div id="lane" key={i} >
              <h2 id="laneName">{lane.name}</h2>
              {lane.stages.map((stage, j) => (
                <div id="stage" key={j}>
                  <h3 id="stageName">{stage.name}</h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      }
    </div>
  );
}

class AppProps {
  boardApi!: IBoardApi;
}


export default App;
