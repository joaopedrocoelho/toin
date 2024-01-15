import React, { useContext } from "react";
import ModalWrapper from "./ModalWrapper";
import { DeckContext, drawCards, shuffle } from "src/context/deckContext";
import { PlayerContext } from "src/context/playerContext";
import { deckCards } from "src/classes/cards";
import { BoardContext } from "src/context/boardContext";
import { ModalContext } from "src/context/modalContext";
import { playerActionKind } from "src/context/playerReducer";
import AddPlayerForm from "../startgamemodal/AddPlayerForm";
import AddPlayerButton from "../startgamemodal/AddPlayerButton";
import AddPlayerCard from "../startgamemodal/AddPlayerCard";
import AddPlayerRow from "../startgamemodal/AddPlayerRow";

const StartGameModal = () => {
  const { setDeck } = useContext(DeckContext);
  const { dispatch: playerDispatch } = useContext(PlayerContext);
  const { state, dispatch } = useContext(BoardContext);
  const { closeModal } = useContext(ModalContext);
  const startGame = () => {
    const { cards, deck } = drawCards(7, shuffle(deckCards));
    setDeck(deck);
    playerDispatch({
      type: playerActionKind.SET_PLAYER,
      payload: {
        hand: cards,
        score: 0,
        name: "Player 1",
        id: 0,
        arrow: {
          playerId: 0,
          arrowIndex: 12,
        },
      },
    });

    closeModal();
  };

  return (
    <ModalWrapper>
      <div className="w-[80vw] h-5/6 flex gap-y-4 flex-col items-center justify-center glass p-6 pt-10 relative">
        <AddPlayerRow />
        <div className="flex w-full justify-between">
          <button
            className="bg-green-400 py-4 px-20  rounded-lg font-bold  text-green-950"
            onClick={() => {
              startGame();
            }}
          >
            Start Game
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default StartGameModal;
