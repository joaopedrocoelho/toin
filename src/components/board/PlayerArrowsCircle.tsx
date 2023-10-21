import { PlayerArrow } from "@assets/index";
import "./circle.css";

const PlayerArrowsCircle = ({
  circleArr = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ],
}: {
  circleArr?: Array<number>;
}) => {
  console.log(circleArr.length);

  return (
    <div className="arrows-circle">
      {circleArr.map((value, index) => {
        return (
          <div
            className="board-item"
            key={index}
            style={{
              transform: `rotate(${index * 15}deg)`,
              fill: "white",
            }}
          >
            {value === 1 && <PlayerArrow className="fill-amber-400 " />}
          </div>
        );
      })}
    </div>
  );
};

export default PlayerArrowsCircle;
