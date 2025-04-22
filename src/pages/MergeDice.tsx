import { useState } from "react";
import GameBoard from "../components/merge/GameBoard";
import ScoreBoard from "../components/merge/ScoreBoard";
import CreateDice from "../components/merge/CreateDice";
import { mergeConnectedDice } from "../utils/gameEngine";
import Modal from "../components/Modal";

type gameBoard = (number | null)[][];

const initGameboard: gameBoard = [
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
  [null, null, null, null, null],
];

const randomNumberDice = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function MergeDice() {
  const [gameBoard, setGameBoard] = useState<gameBoard>(initGameboard);
  const [randomNumber, setRandomNumber] = useState(1);
  const [gameScore, setGameScore] = useState(0);
  // const [isGameOver, setIsGameOver] = useState(false);

  const handleDiceClick = (rowIndex: number, colIndex: number) => {
    setGameBoard((prevBoard: gameBoard) => {
      const newBoard = prevBoard.map((row) => [...row]);
      newBoard[rowIndex][colIndex] = randomNumber;

      const { board: resultBoard, scoreGained } = mergeConnectedDice(
        newBoard,
        rowIndex,
        colIndex
      );

      setGameScore((prev) => prev + scoreGained);
      setRandomNumber(randomNumberDice(1, 6));

      console.log(resultBoard);
      return resultBoard;
    });
  };

  const resetGame = () => {
    setGameBoard(initGameboard);
    setGameScore(0);
    setRandomNumber(randomNumberDice(1, 6));
  }

  // 빈칸이 없고 게임이 끝나지 않은 경우
  const hasNull = gameBoard.some((row) => row.some((cell) => cell === null));
  console.log(hasNull);
  if (!hasNull) {
    localStorage.setItem("gameScore", String(gameScore));
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-100 dark:bg-zinc-700 gap-12">
      <h1 className="text-3xl dark:text-zinc-300 font-semibold">Dice Merge</h1>

      <section className="flex gap-12 items-center justify-center h-full">
        <ScoreBoard gameScore={gameScore} />
        <GameBoard gameBoard={gameBoard} handleDiceClick={handleDiceClick} />
        <CreateDice randomNumber={randomNumber} />
      </section>
      {!hasNull && (
        <Modal>
          <div className="flex flex-col items-center justify-center gap-4 p-8 bg-gray-200 dark:bg-zinc-900 rounded-lg shadow-lg w-1/3">
            <h2 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-200">
              Game Over
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-300">
              Your score: {gameScore}
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={() => resetGame()}
            >
              Restart
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
}
