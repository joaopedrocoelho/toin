import Card from "@components/cards/Card";
import SelectedCardModal from "@components/modals/SelectedCardModal";
import { BoardContext } from "@context/boardContext";
import { getActiveMatrix } from "@context/boardReducer";
import { ModalContext } from "@context/modalContext";
import { PlayersContext } from "@context/playersContext";
import { CardObj } from "@customTypes/card";
import { canPlayCard } from "@customTypes/cardpatterns";
import { useContext } from "react";

const ActiveToin = ({ card }: { card: CardObj }) => {
  const { setModal } = useContext(ModalContext);
  const { state: boardState } = useContext(BoardContext);
  const { state: playerState } = useContext(PlayersContext);

  return (
    <div
      className={`flex relative outline-4 
        outline px-0 py-0 
      rounded-2xl 
      items-center justify-center
      min-w-[150px] aspect-[8/11] 
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
      <Card
        type={card.type}
        faceUp={true}
        cardProperties={card.properties}
        variant="board"
      />
    </div>
  );
};

export default ActiveToin;
