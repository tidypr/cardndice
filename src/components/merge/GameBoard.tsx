type gameBoard = (number | null)[][];

type GameBoardProps = {
  handleDiceClick: (rowIndex: number, colIndex: number) => void;
  gameBoard: gameBoard;
};

import DisplayDice from "../merge/DisplayDice";
import { motion } from "motion/react";

export default function GameBoard({
  gameBoard,
  handleDiceClick,
}: GameBoardProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="grid grid-rows-5 gap-3 w-fit">
        {gameBoard.map((row, rowIndex) => (
          <div className="grid grid-cols-5 gap-3" key={rowIndex}>
            {row.map((col, colIndex) => {
              const isNum = gameBoard[rowIndex][colIndex] !== null;
              // <div key={colIndex}>
              return (
                <motion.button
                  key={colIndex}
                  disabled={isNum}
                  onClick={() => handleDiceClick(rowIndex, colIndex)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <DisplayDice
                    diceNumber={gameBoard[rowIndex][colIndex] || 0}
                  />
                </motion.button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
