import React from "react";

import FaceDownCard from "./FaceDownCard";
import PointCardTemplate from "./PointCardTemplate";
import { cardProperties, cardTypes } from "src/types/card";

//later should add other types

interface CardProps {
  type: cardTypes;
  faceUp: boolean;
  cardProperties: cardProperties;
  height?: string;
}

const Card = ({ faceUp, type, cardProperties, height }: CardProps) => {
  if (faceUp) {
    switch (type) {
      case "PointCard":
        return (
          <div
            className="flex text-white items-center 
        justify-center aspect-[8/11]
        rounded-md min-w-[150px]"
            style={{
              height: height ? height : "auto",
            }}
          >
            <PointCardTemplate
              value={cardProperties.points}
              pattern={cardProperties.pattern}
            />
          </div>
        );
      case "ActionCard":
        return <div>Action Card</div>;
      case "WildCard":
        return <div>Wild Card</div>;
    }
  } else {
    return <FaceDownCard />;
  }
};

export default Card;
