import { createContext, useContext, useState } from "react";

const InitialBoard = Array(9).fill(null);

const boardContext = createContext();
const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Gameprovider({ children }) {
  const [board, setBoard] = useState(InitialBoard);
  const [switchPlayer, setPlayer] = useState(true);

  const handleWinner = function (board) {
    for (let i = 0; i < winningPattern.length; i++) {
      let [a, b, c] = winningPattern[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const winner = handleWinner(board);
  const handleGame = function (index) {
    if (winner) {
      return;
    }
    let newBoard = [...board];
    newBoard[index] = switchPlayer ? "X" : "O";
    setBoard(newBoard);
    setPlayer(!switchPlayer);
  };

  const handleReset = function () {
    setBoard(InitialBoard);
    setPlayer(true);
  };

  const StatusMessage = function () {
    if (winner) return `Winner is ${winner}`;
    if (!board.includes(null)) return `its a draw`;
    return `Player ${switchPlayer ? "X" : "O"} turn`;
  };
  return (
    <boardContext.Provider
      value={{ board, handleGame, handleReset, StatusMessage }}
    >
      {children}
    </boardContext.Provider>
  );
}

function useBoardcontext() {
  const context = useContext(boardContext);
  if (context === undefined) throw new Error("out of scope");
  return context;
}

export { useBoardcontext, Gameprovider };
