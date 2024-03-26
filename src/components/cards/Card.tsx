import { useState } from "react";
import { cardProperties, cardTypes } from "src/types/card";
import FaceDownCard from "./FaceDownCard";
import PointCardTemplate from "./PointCardTemplate";
import { cardSize } from "./cardSize";

const cardStyle: React.CSSProperties = {
  position: "relative",
  transition: "transform 1s",
  transformStyle: "preserve-3d",
};

const cardFaceStyle: React.CSSProperties = {
  position: "absolute",
  backfaceVisibility: "hidden",
  width: "100%",
  height: "100%",
};

const cardFaceBackStyle: React.CSSProperties = {
  transform: "rotateY(180deg)",
};

interface CardProps {
  type: cardTypes;
  faceUp: boolean;
  cardProperties: cardProperties;
  variant: keyof typeof cardSize;
  canRotate?: boolean;
  animate?: boolean;
}

const Card = ({
  faceUp,
  type,
  cardProperties,
  variant,
  canRotate = false,
  animate = false,
}: CardProps) => {
  const [rotated, setRotated] = useState(faceUp);

  const FaceUpCard = () => {
    switch (type) {
      case "PointCard":
        return (
          <div
            className={`flex text-white items-center 
        justify-center aspect-[8/11]
        rounded-md 
        ${cardSize[variant]}`}
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
  };

  return (
    <div className={`cursor-pointer ${cardSize[variant]}`}>
      <div
        style={{
          ...cardStyle,
          transform: rotated ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        className={`relative ${cardSize[variant]}   ${animate ? "flip" : ""}`}
      >
        <button
          style={cardFaceStyle}
          onClick={() => {
            canRotate && setRotated(true);
          }}
        >
          <FaceDownCard variant={variant} />
        </button>
        <button
          style={{
            ...cardFaceStyle,
            ...cardFaceBackStyle,
          }}
          onClick={() => {
            canRotate && setRotated(false);
          }}
        >
          <FaceUpCard />
        </button>
      </div>
    </div>
  );
};

export default Card;
