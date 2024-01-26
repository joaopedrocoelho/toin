import React, { useContext, useState } from "react";
import AddPlayerButton from "./AddPlayerButton";
import AddPlayerForm from "./AddPlayerForm";
import { AddPlayerFormContext } from "src/context/addPlayerFormContext";

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

interface Props {
  addPlayer: () => void;
  removePlayer: () => void;
  onChange: (value: string) => void;
  idx: number;
}

const AddPlayerCard = ({ addPlayer, removePlayer, onChange, idx }: Props) => {
  const [rotated, setRotated] = useState(false);
  const { errorFields, setErrorFields } = useContext(AddPlayerFormContext);

  return (
    <div
      className={`w-64 h-40 cursor-pointer
      ${errorFields.includes(idx) && "headShake"}`}
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
            addPlayer();
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
              removePlayer();
              if (errorFields.includes(idx)) {
                setErrorFields(errorFields.filter((i) => i !== idx));
              }
            }}
            onChange={onChange}
            idx={idx}
          />
        </div>
      </div>
    </div>
  );
};

export default AddPlayerCard;
