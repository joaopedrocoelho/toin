import React from "react";
import { cardProperties, cardTypes } from "src/classes/Card";
import FaceDownCard from "./FaceDownCard";

//later should add other types

interface CardProps {
  type: cardTypes;
  faceUp: boolean;
  cardProperties: cardProperties;
}

const Card = ({ faceUp, type, cardProperties }: CardProps) => {
  if (faceUp) {
    return <div>render card component</div>;
  }

  return <FaceDownCard />;
};

export default Card;
