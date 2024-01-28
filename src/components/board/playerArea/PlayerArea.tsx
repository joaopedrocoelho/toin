import PlayerHand from "./PlayerHand";
import ToinArea from "./ToinArea";
import { PlayerObj } from "src/context/playersReducer";

const PlayerArea = ({ player }: { player: PlayerObj | undefined }) => {
  return (
    <div className="flex w-full items-center gap-5 mt-4 pl-[16%]">
      {player && (
        <>
          <ToinArea card={player.toin} />
          <div className="max-w-[50%] overflow-x-scroll overflow-y-visible">
            <PlayerHand hand={player.hand} />
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerArea;
