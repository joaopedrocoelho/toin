import "./circle.css";
import { Moon, Star, Fire, Thunder, Clover } from "@assets/index";

const Circle = ({
  circleArr = [
    4, 1, 2, 2, 3, 5, 1, 1, 4, 2, 3, 5, 5, 1, 2, 4, 3, 3, 2, 5, 4, 4, 1, 3,
  ],
}: {
  circleArr?: Array<number>;
}) => {
  console.log(circleArr.length);

  return (
    <div className="circle border-[0.25px] border-white/30">
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
            {value === 1 && <Star className="fill-amber-400 " />}
            {value === 2 && <Moon className=" fill-cyan-200" />}
            {value === 3 && <Fire className=" fill-rose-600 " />}
            {value === 4 && <Thunder className=" fill-lime-300" />}
            {value === 5 && <Clover className=" fill-zinc-300" />}
          </div>
        );
      })}
    </div>
  );
};

export default Circle;
