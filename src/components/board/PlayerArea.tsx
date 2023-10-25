import { PlayerArrow } from "@assets/index";
import React from "react";
import PointCardTemplate from "../cards/PointCardTemplate";
import { allSameOneSidePattern } from "src/types/cardtypes";

const PlayerArea = () => {
  return (
    <div className="flex flex-col">
      {/* <PlayerArrow className=" w-2/3 m-auto pt-8 pb-4" /> */}
      <div className="flex relative border-gray-500 border-4 aspect-[8/11] items-center justify-center">
        2x
      </div>
      <PointCardTemplate value={10} pattern={allSameOneSidePattern} />
    </div>
  );
};

export default PlayerArea;
