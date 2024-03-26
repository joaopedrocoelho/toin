import { cardSize } from "@components/cards/cardSize";

interface Props {
  variant?: keyof typeof cardSize;
}

const EmptyToin = ({ variant = "board" }: Props) => {
  return (
    <div
      className={`flex relative border-gray-500 border-2
  ${cardSize[variant]} items-center justify-center rounded-lg`}
    >
      <div
        className="rounded-full border-2 border-gray-500 flex items-center justify-center
    p-2 text-xs text-gray-500 text-bold"
      >
        2x
      </div>
    </div>
  );
};

export default EmptyToin;
