import React, { useContext } from "react";
import Card from "src/components/cards/Card";
import { ToinContext } from "src/context/toinContext";

const ToinArea = () => {
  const { card } = useContext(ToinContext);

  return card ? (
    <div className="flex relative outline-4 outline-red-500  outline px-2 py-0 rounded-2xl aspect-[8/11] min-w-[150px] items-center justify-center">
      <Card type={card.type} faceUp={true} cardProperties={card.properties} />
    </div>
  ) : (
    <div className="flex relative border-gray-500 border-4 aspect-[8/11] w-[150px] items-center justify-center">
      2x
    </div>
  );
};

export default ToinArea;
