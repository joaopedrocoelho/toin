import { Label, TextInput } from "flowbite-react";
import React, { useContext } from "react";
import { AddPlayerFormContext } from "src/context/addPlayerFormContext";
import CloseIcon from "./CloseIcon";

const LabelTheme = {
  root: {
    base: "text-lg font-bold",
  },
};

const InputTheme = {
  field: {
    input: {
      base: "border-2 border-gray-400 rounded-lg w-full",
    },
  },
};

interface Props {
  onClose: () => void;
  onChange: (value: string) => void;
  idx: number;
}
const AddPlayerForm = ({ onClose, onChange, idx }: Props) => {
  const { errorFields } = useContext(AddPlayerFormContext);
  return (
    <div
      className={`flex p-6 bg-white rounded-lg w-64 h-40 shadow-lg
      ${errorFields.includes(idx) ? "border-2 border-red-500" : "border-none"}`}
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
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </FormField>
    </div>
  );
};

export const FormField = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col w-full gap-y-4">{children}</div>;
};

export default AddPlayerForm;
