import React, { useState } from "react";
import AddPlayerButton from "./AddPlayerButton";
import AddPlayerForm from "./AddPlayerForm";

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

const AddPlayerCard = () => {
  const [rotated, setRotated] = useState(false);

  return (
    <div
      className="w-64 h-40 cursor-pointer"
      style={{
        perspective: "600px",
      }}
    >
      <div
        style={{
          ...cardStyle,
          transform: rotated ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
        className="w-full h-full"
      >
        <div
          style={cardFaceStyle}
          onClick={() => {
            setRotated(true);
          }}
        >
          <AddPlayerButton />
        </div>
        <div
          style={{
            ...cardFaceStyle,
            ...cardFaceBackStyle,
          }}
        >
          <AddPlayerForm
            onClose={() => {
              setRotated(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddPlayerCard;
