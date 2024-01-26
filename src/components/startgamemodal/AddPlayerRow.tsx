import React, { useContext } from "react";
import AddPlayerCard from "./AddPlayerCard";
import { MAX_PLAYERS } from "../modals/StartGameModal";
import { AddPlayerFormContext } from "src/context/addPlayerFormContext";

const AddPlayerRow = () => {
  const {
    totalPlayers,
    setTotalPlayers,
    players,
    setPlayers,
    errorFields,
    setErrorFields,
  } = useContext(AddPlayerFormContext);

  return (
    <div className="flex items-center w-full gap-x-4">
      {Array(MAX_PLAYERS)
        .fill(0)
        .map((_, index) => (
          <AddPlayerCard
            key={`player-${index}`}
            addPlayer={() => {
              setTotalPlayers(totalPlayers + 1);
              setPlayers([...players, { name: "", id: index }]);
            }}
            removePlayer={() => {
              setTotalPlayers(totalPlayers - 1);
              setPlayers(players.filter((_, i) => i !== index));
            }}
            onChange={(value) => {
              const newPlayers = [...players];
              newPlayers[index].name = value;
              setPlayers(newPlayers);
              if (errorFields.includes(index))
                setErrorFields(errorFields.filter((i) => i !== index));
            }}
            idx={index}
          />
        ))}
    </div>
  );
};

export default AddPlayerRow;
