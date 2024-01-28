import React from "react";

interface Props {
  children?: React.ReactNode;
  variant?: "deck" | "hand";
}

const FaceDownCard = ({
  children = "Face Down Card",
  variant = "deck",
}: Props) => {
  return (
    <div
      className={`flex text-white items-center 
    justify-center aspect-[8/11] bg-purple-950 
    rounded-md
    ${variant === "deck" ? "min-w-[150px]" : "w-[50px]"}`}
      style={{
        boxShadow: "0px 0px 0px 4px #ff9200",
        filter: "drop-shadow(0px 0.2px 0px black)",
      }}
    >
      {children}
    </div>
  );
};

export default FaceDownCard;
