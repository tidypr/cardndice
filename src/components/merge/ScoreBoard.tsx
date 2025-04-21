import { GiTrophyCup, GiLaurelsTrophy } from "react-icons/gi";

export default function ScoreBoard() {
  return (
    <div className="flex flex-col items-center justify-center w-1/4 ">
      <h1>ScoreBoard</h1>
      <h1>Score</h1>
      <p>21,321</p>
      <div>
        <GiLaurelsTrophy className="fill-amber-400 w-full h-full"/>
        <h1>HighScore</h1>
      </div>
    </div>
  );
}
