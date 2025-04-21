import DisplayDice from "./DisplayDice";

export default function CreateDice({ randomNumber }: { randomNumber: number }) {
  return (
    <div className="flex flex-col items-center justify-center w-1/4">
      <div className="flex flex-col w-full h-1/4  items-center justify-center ">
        <p className="text-lg font-bold">Current</p>
        <DisplayDice diceNumber={randomNumber} />
      </div>
    </div>
  );
}
