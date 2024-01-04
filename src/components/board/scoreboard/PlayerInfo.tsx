import React from "react";

const PlayerInfo = ({ name, score }: { name: string; score: number }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl font-bold">🦁{name}</h2>
      <h1 className="text-4xl font-bold">{score}</h1>
    </div>
  );
};

export default PlayerInfo;
