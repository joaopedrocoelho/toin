import { CardObj } from "@customTypes/card";
import OpponentActiveToin from "../toin/OpponentActiveToin";
import OpponentEmptyToin from "../toin/OpponentEmptyToin";

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
    <OpponentEmptyToin />
  );
};

export default OppononentToinArea;
