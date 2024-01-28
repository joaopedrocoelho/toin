import { PlayerObj } from "@context/playersReducer";
import OpponentHand from "./OpponentHand";
import OppononentToinArea from "./OppononentToinArea";

interface Props {
  player: PlayerObj;
}

const OpponentArea = ({ player }: Props) => {
  return (
    <div className="flex flex-rol gap-x-4">
      <OppononentToinArea
        card={player.toin}
        arrowIdx={player.arrow.arrowIndex}
      />
      <OpponentHand numberOfCards={player.hand.length} />
    </div>
  );
};

export default OpponentArea;
