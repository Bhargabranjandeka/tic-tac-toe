import { useBoardcontext } from "./context/tic-tac-toe-context";
import Player from "./player";
export default function Tic_tac_toe() {
  const { board, handleGame, handleReset, StatusMessage } = useBoardcontext();

  return (
    <>
      <div className="grid">
        {board.map((value, index) => (
          <button
            onClick={() => handleGame(index)}
            key={index}
            disabled={board[index] !== null}
            className="cells"
          >
            <Player value={value} />
          </button>
        ))}
      </div>
      <div className="resetbtn">
        <button onClick={handleReset}>Reset</button>
        <div>{StatusMessage()}</div>
      </div>
    </>
  );
}
