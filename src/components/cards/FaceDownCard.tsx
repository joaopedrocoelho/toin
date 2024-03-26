import React from "react";
import { cardSize } from "./cardSize";

interface Props {
  children?: React.ReactNode;
  variant?: keyof typeof cardSize;
}

const borderSize = {
  deck: "4px",
  hand: "2px",
  modal: "8px",
  board: "1px",
};

const textSize = {
  deck: "text-xs",
  hand: "text-sm",
  modal: "text-lg",
  board: "text-xs",
};

const FaceDownCard = ({
  children = "Face Down Card",
  variant = "deck",
}: Props) => {
  return (
    <div
      className={`flex text-white items-center 
    justify-center bg-purple-950 
    rounded-md
    ${cardSize[variant]}
    ${textSize[variant]}`}
      style={{
        boxShadow: `0px 0px 0px ${borderSize[variant]} #ff9200`,
        filter: "drop-shadow(0px 0.2px 0px black)",
      }}
    >
      {children}
    </div>
  );
};

export default FaceDownCard;
