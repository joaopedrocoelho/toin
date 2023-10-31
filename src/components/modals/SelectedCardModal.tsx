import React, { useContext } from "react";
import ModalWrapper from "./ModalWrapper";
import { ModalContext } from "src/context/modalContext";
import { CardClass } from "src/classes/Card";
import Card from "../cards/Card";

const SelectedCardModal = ({ card }: { card: CardClass }) => {
  const { closeModal } = useContext(ModalContext);
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
        <div className="flex flex-col relative">
          <Card
            height="350px"
            type={card.type}
            faceUp={true}
            cardProperties={card.getProperties()}
          />
        </div>
        <div className="flex gap-x-8 mt-8">
          <button className="bg-amber-300 p-4 rounded-lg font-bold min-w-[200px] text-amber-950">
            Place as Toin
          </button>
          <button className="bg-red-400 p-4 rounded-lg font-bold min-w-[200px] text-red-950">
            Play
          </button>
          <button className="bg-green-400 p-4 rounded-lg font-bold min-w-[200px] text-green-950">
            Rotate
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SelectedCardModal;