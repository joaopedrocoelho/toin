import React, { memo } from "react";
import getRandomEmoji from "@utils/getRandomEmoji";

interface Props {
  name: string;
  id: number;
  score: number;
  isActivePlayer: boolean;
}

const PlayerInfo = ({ name, id, score, isActivePlayer }: Props) => {
  const Emoji = memo(() => getRandomEmoji());
  return (
    <div
      className={`flex flex-col gap-y-4 w-full p-4 rounded-xl
      
      ${isActivePlayer ? "border-4 border-blue-700" : "border-0"}`}
      style={{
        backgroundColor: `hsl(${(id + 1) * 90}, 70%, 70%)`,
      }}
    >
      <h2
        className={`text-4xl font-bold flex gap-x-4 w-full
      
      ${isActivePlayer ? "text-blue-700" : "text-black"}`}
      >
        <i>
          <Emoji />
        </i>
        {name}
      </h2>
      <h1 className="text-4xl font-bold">{score}</h1>
    </div>
  );
};

export default PlayerInfo;
