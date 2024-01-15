import React from "react";
import PlusIcon from "./PlusIcon";

const AddPlayerButton = () => {
  return (
    <div
      className="flex flex-col
    items-center
    gap-y-4
    p-6 bg-gray-200 
    border-1 border-gray-800 rounded-lg 
    w-64 h-40 shadow-lg"
    >
      <div
        className="rounded-full
    flex items-center justify-center
       text-4xl
      font-bold border-4 border-gray-500
       w-16 h-16"
      >
        <PlusIcon className="w-8 h-8 fill-gray-500" />
      </div>
      <h2 className="text-2xl font-bold text-gray-500">Add Player</h2>
    </div>
  );
};

export default AddPlayerButton;
