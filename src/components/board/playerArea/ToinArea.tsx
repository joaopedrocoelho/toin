import React, { useContext } from "react";
import Card from "src/components/cards/Card";
import SelectedCardModal from "src/components/modals/SelectedCardModal";
import { BoardContext } from "src/context/boardContext";
import { getActiveMatrix } from "src/context/boardReducer";
import { ModalContext } from "src/context/modalContext";
import { PlayersContext } from "src/context/playersContext";
import { ToinContext } from "src/context/toinContext";
import { canPlayCard } from "src/types/cardpatterns";

const ToinArea = () => {
  const { card } = useContext(ToinContext);
  const { setModal } = useContext(ModalContext);
  const { state: boardState } = useContext(BoardContext);
  const { state: playerState } = useContext(PlayersContext);

  return card ? (
    <div
      className={`flex relative outline-4 
      outline px-0 py-0 
    rounded-2xl aspect-[8/11] min-w-[150px] 
    items-center justify-center
    ${
      canPlayCard(
        getActiveMatrix(
          boardState,
          playerState.players[playerState.activePlayer].arrow.arrowIndex
        ),
        card
      )
        ? "outline-green-500"
        : "outline-red-500"
    } `}
      onClick={() => {
        setModal(<SelectedCardModal card={card} cardIdx={9999} toin />);
      }}
    >
      <Card type={card.type} faceUp={true} cardProperties={card.properties} />
    </div>
  ) : (
    <div className="flex relative border-gray-500 border-4 aspect-[8/11] w-[150px] items-center justify-center">
      2x
    </div>
  );
};

export default ToinArea;
