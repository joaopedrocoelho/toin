import React, { useContext, useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { ModalContext } from "src/context/modalContext";
import Card from "../cards/Card";
import { ToinContext } from "src/context/toinContext";
import { PlayerContext } from "src/context/playerContext";
import { playerActionKind } from "src/context/playerReducer";
import { BoardContext } from "src/context/boardContext";
import { getActiveMatrix } from "src/context/boardReducer";
import {
  canPlayCard,
  convertActiveMatrixToObjBasedOnPattern,
  convertPatternToObj,
} from "src/types/cardpatterns";
import { CardObj } from "src/types/card";

const SelectedCardModal = ({
  card,
  cardIdx,
}: {
  card: CardObj;
  cardIdx: number;
}) => {
  const { closeModal } = useContext(ModalContext);
  const { setCard } = useContext(ToinContext);
  const { state: playerState, dispatch: playerDispatch } =
    useContext(PlayerContext);
  const { state: boardState, dispatch: boardDispatch } =
    useContext(BoardContext);

  const [rotated, setRotated] = useState<boolean>(false);

  const playCard = (idx: number) => {
    console.log("card", card);
    playerDispatch({
      type: playerActionKind.PLAY_CARD,
      payload: idx,
    });
  };

  return (
    <ModalWrapper>
      <div className="w-[80vw] h-5/6 flex gap-y-4 flex-col items-center justify-center glass p-6 pt-10 relative">
        <button
          className="absolute rounded-full right-4 top-4 w-8 h-8 bg-gray-900 text-2xl text-white"
          onClick={() => {
            closeModal();
          }}
          type="button"
        >
          &#10006;
        </button>
        <div
          className="flex flex-col relative transition-transform"
          style={{
            transform: rotated ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <Card
            height="350px"
            type={card.type}
            faceUp={true}
            cardProperties={card.properties}
          />
        </div>
        <div className="flex gap-x-8 mt-16">
          <button
            className="bg-amber-300 p-4 rounded-lg font-bold min-w-[200px] text-amber-950"
            onClick={() => {
              setCard(card);
              playerDispatch({
                type: playerActionKind.REMOVE_CARD,
                payload: cardIdx,
              });
              closeModal();
            }}
          >
            Place as Toin
          </button>
          {canPlayCard(
            getActiveMatrix(boardState, playerState.arrow.arrowIndex),
            card
          ) && (
            <button
              onClick={() => {
                playCard(cardIdx);
                closeModal();
              }}
              className="bg-red-400 p-4 rounded-lg font-bold min-w-[200px] text-red-950"
            >
              Play
            </button>
          )}
          <button
            className="bg-green-400 p-4 rounded-lg font-bold min-w-[200px] text-green-950"
            onClick={() => {
              setRotated(!rotated);
            }}
          >
            Rotate
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SelectedCardModal;
