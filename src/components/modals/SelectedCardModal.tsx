import React, { useContext, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { ModalContext } from "src/context/modalContext";
import { CardClass } from "src/classes/Card";
import Card from "../cards/Card";
import { ToinContext } from "src/context/toinContext";
import { CardObj } from "src/context/deckContext";

const SelectedCardModal = ({ card }: { card: CardObj }) => {
  const { closeModal } = useContext(ModalContext);
  const { setCard } = useContext(ToinContext);

  const [rotated, setRotated] = useState<boolean>(false);
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
              closeModal();
            }}
          >
            Place as Toin
          </button>
          <button className="bg-red-400 p-4 rounded-lg font-bold min-w-[200px] text-red-950">
            Play
          </button>
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
