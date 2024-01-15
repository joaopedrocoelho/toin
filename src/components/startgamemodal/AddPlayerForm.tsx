import { Label, TextInput } from "flowbite-react";
import React from "react";
import CloseIcon from "./CloseIcon";

const LabelTheme = {
  root: {
    base: "text-lg font-bold",
  },
};

const InputTheme = {
  field: {
    input: {
      base: "border-2 border-gray-400 rounded-lg",
    },
  },
};
const AddPlayerForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      className="flex p-6 bg-white rounded-lg w-64 h-40 shadow-lg
    "
    >
      <FormField>
        <div className="flex justify-between w-full items-center">
          <Label theme={LabelTheme}>Player Name</Label>
          <div
            className="rounded-full p-3 bg-red-300 cursor-pointer"
            onClick={onClose}
          >
            <CloseIcon className="w-2 h-2 fill-red-800" />
          </div>
        </div>
        <TextInput
          theme={InputTheme}
          placeholder="Enter Player Name"
          sizing="lg"
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </FormField>
    </div>
  );
};

export const FormField = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col max-w-80 gap-y-4">{children}</div>;
};

export default AddPlayerForm;
