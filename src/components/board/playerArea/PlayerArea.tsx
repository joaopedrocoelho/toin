import { PlayerObj } from "src/context/playersReducer";
import PlayerHand from "./PlayerHand";
import ToinArea from "./ToinArea";

const PlayerArea = ({ player }: { player: PlayerObj | undefined }) => {
  return (
    <div className="flex w-full items-center gap-x-5">
      {player && (
        <>
          <div className="pt-4">
            <ToinArea card={player.toin} />
          </div>
          <div className="w-[500px] overflow-x-scroll overflow-y-visible pt-7 ">
            <PlayerHand hand={player.hand} />
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerArea;
