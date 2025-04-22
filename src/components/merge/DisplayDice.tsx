type DisplayDiceProps = {
  className?: string;
  fillColor?: boolean;
  disabled?: boolean;
  diceNumber: number;
  onClick?: () => void;
};

import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
  GiPlainSquare,
  // GiDiceSixFacesOne,
  // GiDiceSixFacesTwo,
  // GiDiceSixFacesThree,
  // GiDiceSixFacesFour,
  // GiDiceSixFacesFive,
  // GiDiceSixFacesSix,
} from "react-icons/gi";
import { motion } from "motion/react";

export default function DisplayDice({ diceNumber, ...rest }: DisplayDiceProps) {
  return (
    <motion.div
      className="bg-gray-200 w-16 h-16 rounded-lg flex items-center justify-center"
      {...rest}
    >
      {diceNumber === 1 && (
        <GiInvertedDice1 className="fill-gray-400 w-full h-full" />
      )}
      {diceNumber === 2 && (
        <GiInvertedDice2 className="fill-yellow-400 w-full h-full" />
      )}
      {diceNumber === 3 && (
        <GiInvertedDice3 className="fill-red-400 w-full h-full" />
      )}
      {diceNumber === 4 && (
        <GiInvertedDice4 className="fill-green-400 w-full h-full" />
      )}
      {diceNumber === 5 && (
        <GiInvertedDice5 className="fill-blue-400 w-full h-full" />
      )}
      {diceNumber === 6 && (
        <GiInvertedDice6 className="fill-purple-400 w-full h-full" />
      )}
      {diceNumber === 7 && (
        <GiPlainSquare className="fill-zinc-400 w-full h-full" />
      )}
    </motion.div>
  );
}
