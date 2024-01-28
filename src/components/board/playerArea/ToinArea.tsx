import { CardObj } from "@customTypes/card";
import ActiveToin from "../toin/ActiveToin";
import EmptyToin from "../toin/EmptyToin";

const ToinArea = ({ card }: { card: CardObj | null }) => {
  return card ? <ActiveToin card={card} /> : <EmptyToin />;
};

export default ToinArea;
