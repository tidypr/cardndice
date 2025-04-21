type gameBoard = (number | null)[][];

type GameBoardProps = {
  handleDiceClick: (rowIndex: number, colIndex: number) => void;
  gameBoard: gameBoard;
};

import DisplayDice from "../merge/DisplayDice";

export default function GameBoard({
  gameBoard,
  handleDiceClick,
}: GameBoardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="grid grid-rows-5 gap-2 w-fit">
        {gameBoard.map((row, rowIndex) => (
          <div className="grid grid-cols-5 gap-2" key={rowIndex}>
            {row.map((col, colIndex) => {
              const isNum = gameBoard[rowIndex][colIndex] !== null;
              // <div key={colIndex}>
              return (
                <button
                  key={colIndex}
                  disabled={isNum}
                  className="bg-gray-200 w-16 h-16 rounded-xl flex items-center justify-center"
                  onClick={() => handleDiceClick(rowIndex, colIndex)}
                >
                  <DisplayDice
                    diceNumber={gameBoard[rowIndex][colIndex] || 0}
                  />
                </button>
              );
              // </div>`
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
