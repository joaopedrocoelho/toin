import React from "react";
import getRandomEmoji from "@utils/getRandomEmoji";

const PlayerInfo = ({ name, score }: { name: string; score: number }) => {
  return (
    <div className="flex flex-col gap-y-4 w-full">
      <h2 className="text-4xl font-bold flex gap-x-4 w-full">
        <i>{getRandomEmoji()}</i>
        {name}
      </h2>
      <h1 className="text-4xl font-bold">{score}</h1>
    </div>
  );
};

export default PlayerInfo;
