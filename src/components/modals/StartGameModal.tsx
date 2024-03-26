import React, { useContext } from "react";
import { deckCards } from "src/classes/cards";
import {
  AddPlayerFormContext,
  NewPlayer,
} from "src/context/addPlayerFormContext";
import { DeckContext, drawHands, shuffle } from "src/context/deckContext";
import { ModalContext } from "src/context/modalContext";
import { PlayersContext } from "src/context/playersContext";
import { calcInitArrowIdx, playerActionKind } from "src/context/playersReducer";
import AddPlayerRow from "../startgamemodal/AddPlayerRow";
import ModalWrapper from "./ModalWrapper";

export const MAX_PLAYERS = 4;

const StartGameModal = () => {
  const { setDeck } = useContext(DeckContext);
  const { dispatch: playerDispatch } = useContext(PlayersContext);
  const { closeModal } = useContext(ModalContext);

  const [totalPlayers, setTotalPlayers] = React.useState<number>(0);
  const [players, setPlayers] = React.useState<NewPlayer[]>([]);
  const [errorFields, setErrorFields] = React.useState<number[]>([]);

  const startGame = () => {
    const { hands, deck } = drawHands(totalPlayers, 7, shuffle(deckCards));
    setDeck(deck);

    const newPlayers = players.map((player) => {
      return {
        hand: hands[player.id],
        toin: null,
        score: 0,
        name: player.name,
        id: player.id,
        arrow: {
          playerId: 0,
          arrowIndex: calcInitArrowIdx(totalPlayers, player.id),
        },
      };
    });

    playerDispatch({
      type: playerActionKind.SET_PLAYERS,
      payload: newPlayers,
    });

    closeModal();
  };

  const checkErrors = () => {
    console.log("checking errors");
    let hasError = false;
    const errors: number[] = [];
    players.forEach((player, index) => {
      if (!player?.name) {
        console.log("found error!");
        errors.push(index);
        hasError = true;
      }
    });
    setErrorFields(errors);
    return hasError;
  };

  const handleSubmit = () => {
    if (!checkErrors()) startGame();
  };

  return (
    <AddPlayerFormContext.Provider
      value={{
        totalPlayers,
        setTotalPlayers,
        players,
        setPlayers,
        errorFields,
        setErrorFields,
      }}
    >
      <ModalWrapper>
        <div className="w-[80vw] h-5/6 flex gap-y-4 flex-col items-center justify-center glass p-6 pt-10 relative">
          <AddPlayerRow />
          <div className="flex w-full justify-between mt-8">
            <button
              type="button"
              onClick={players.length ? handleSubmit : undefined}
              className={`${
                !!players.length || !!errorFields.length
                  ? "bg-green-400"
                  : "bg-gray-400 cursor-not-allowed"
              }
              py-4 px-20  rounded-lg font-bold  text-green-950 mx-auto`}
            >
              Start Game
            </button>
          </div>
          <section className="flex gap-x-4 bg-white p-4">
            <h4 className="text-bold">totalPlayers</h4>
            <p>{totalPlayers}</p>
            <h4 className="text-bold">players</h4>
            <p>{JSON.stringify(players)}</p>
            <h4 className="text-bold">errorFields</h4>
            <p>{errorFields}</p>
          </section>
        </div>
      </ModalWrapper>
    </AddPlayerFormContext.Provider>
  );
};

export default StartGameModal;
