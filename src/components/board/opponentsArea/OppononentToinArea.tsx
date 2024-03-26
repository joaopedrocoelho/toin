import { CardObj } from "@customTypes/card";
import EmptyToin from "../toin/EmptyToin";
import OpponentActiveToin from "../toin/OpponentActiveToin";

const OppononentToinArea = ({
  card,
  arrowIdx,
}: {
  card: CardObj | null;
  arrowIdx: number;
}) => {
  return card ? (
    <OpponentActiveToin card={card} arrowIdx={arrowIdx} />
  ) : (
    <EmptyToin />
  );
};

export default OppononentToinArea;
