import FaceDownCard from "@components/cards/FaceDownCard";
import React from "react";

interface Props {
  numberOfCards: number;
}

const OpponentHand = ({ numberOfCards }: Props) => {
  return <FaceDownCard variant="hand">{numberOfCards}</FaceDownCard>;
};

export default OpponentHand;
