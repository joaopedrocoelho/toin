import React from "react";
import AddPlayerCard from "./AddPlayerCard";

const AddPlayerRow = () => {
  return (
    <div className="flex items-center w-full gap-x-4">
      <AddPlayerCard />
      <AddPlayerCard />
      <AddPlayerCard />
      <AddPlayerCard />
    </div>
  );
};

export default AddPlayerRow;
