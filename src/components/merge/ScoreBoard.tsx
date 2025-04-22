import { GiLaurelsTrophy } from "react-icons/gi";

type ScoreBoardProps = {
  gameScore: number;
};

const getHighScore = () => {
  const highScore = localStorage.getItem("gameScore");
  if (highScore) {
    return parseInt(highScore, 10);
  }
  return 0;
}

export default function ScoreBoard({ gameScore }: ScoreBoardProps) {
  const highScore = getHighScore();
  return (
    <div className="w-64 rounded-2xl shadow-lg bg-white dark:bg-zinc-900 p-6 flex flex-col gap-8 h-full justify-center items-center">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-zinc-600 dark:text-zinc-300">
          Current Score
        </h2>
        <p className="text-4xl font-bold text-emerald-500">{gameScore}</p>
      </div>

      <div className="flex flex-col items-center gap-2">
        <GiLaurelsTrophy className="text-amber-400 w-12 h-12 drop-shadow-md" />
        <h2 className="text-lg font-semibold text-zinc-700 dark:text-zinc-200">
          High Score
        </h2>
        <p className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          {highScore}
        </p>
      </div>
    </div>
  );
}
