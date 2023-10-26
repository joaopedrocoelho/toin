import React from "react";
import { Card } from "src/classes/Card";

export interface PlayerHandProps {
  cards: Card[];
}

const PlayerHand = ({ cards }: PlayerHandProps) => {
  return <div>PlayerHand</div>;
};

export default PlayerHand;
