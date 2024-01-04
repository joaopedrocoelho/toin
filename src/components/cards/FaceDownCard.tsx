import React from "react";

const FaceDownCard = () => {
  return (
    <div
      className="flex text-white items-center 
    justify-center aspect-[8/11] bg-purple-950 
    rounded-md min-w-[150px] "
      style={{
        boxShadow: "0px 0px 0px 4px #ff9200",
        filter: "drop-shadow(0px 0.2px 0px black)",
      }}
    >
      Face Down Card
    </div>
  );
};

export default FaceDownCard;
