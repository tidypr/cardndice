import { useState } from "react";
import GameBoard from "../components/merge/GameBoard";
import ScoreBoard from "../components/merge/ScoreBoard";
import CreateDice from "../components/merge/CreateDice";
import { mergeConnectedDice } from "../utils/gameEngine";

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

  const handleDiceClick = (rowIndex: number, colIndex: number) => {
    setGameBoard((prevBoard: gameBoard) => {
      const newBoard = prevBoard.map((row) => [...row]);

      // 값 입력
      newBoard[rowIndex][colIndex] = randomNumber;

      // 연결된 같은 숫자 찾기
      const resultBoard = mergeConnectedDice(newBoard, rowIndex, colIndex);

      // 새 주사위 숫자 갱신
      const newNumber = randomNumberDice(1, 6);
      setRandomNumber(newNumber);
      return resultBoard;
    });
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen min-w-screen bg-gray-100">
      <h1>gameboard</h1>

      <section className="flex gap-12 items-center justify-center">
        <ScoreBoard />
        <GameBoard gameBoard={gameBoard} handleDiceClick={handleDiceClick} />
        <CreateDice randomNumber={randomNumber} />
      </section>
    </main>
  );
}
