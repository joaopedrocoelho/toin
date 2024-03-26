import FaceDownCard from "@components/cards/FaceDownCard";

interface Props {
  numberOfCards: number;
}

const OpponentHand = ({ numberOfCards }: Props) => {
  return <FaceDownCard variant="board">{numberOfCards}</FaceDownCard>;
};

export default OpponentHand;
