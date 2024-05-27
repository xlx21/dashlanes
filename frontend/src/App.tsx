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
        <div className="board">
          <h1 className="boardName">{board.name}</h1>
          {board.lanes.map((lane, i) => (
            <div className="lane" key={i} >
              <h2 className="laneName">{lane.name}</h2>
              {lane.stages.map((stage, j) => (
                <div className="stage" key={j}>
                  <h3 className="stageName">{stage.name}</h3>
                  {stage.tickets.map((ticket, k) => (
                    <div className="ticket" key={k}>
                      <h4 className="ticketName">{ticket.name}</h4>
                      <p className="ticketDescription">{ticket.description}</p>
                    </div>
                  ))}
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
