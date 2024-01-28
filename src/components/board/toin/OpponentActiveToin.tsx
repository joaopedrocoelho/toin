import Card from "@components/cards/Card";
import { BoardContext } from "@context/boardContext";
import { getActiveMatrix } from "@context/boardReducer";
import { CardObj } from "@customTypes/card";
import { canPlayCard } from "@customTypes/cardpatterns";
import { useContext } from "react";

const OpponentActiveToin = ({
  card,
  arrowIdx,
}: {
  card: CardObj;
  arrowIdx: number;
}) => {
  const { state: boardState } = useContext(BoardContext);
  return (
    <div
      className={`flex relative outline-4 
        outline px-0 py-0 
      rounded-2xl 
      items-center justify-center
      w-[50px] aspect-[8/11] 
      ${
        canPlayCard(getActiveMatrix(boardState, arrowIdx), card)
          ? "outline-green-500"
          : "outline-red-500"
      } `}
    >
      <Card type={card.type} faceUp={true} cardProperties={card.properties} />
    </div>
  );
};

export default OpponentActiveToin;
