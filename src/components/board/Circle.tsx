import "./circle.css";
import { Moon, Star, Fire, Thunder, Clover } from "@assets/index";

const Circle = () => {
  //an array of length 24 filled with the numbers 1 to 5 repeated randomly
  const randomArray = Array.from(
    { length: 24 },
    () => Math.floor(Math.random() * 5) + 1
  );
  return (
    <div className="circle border-[0.25px] border-white/30">
      {randomArray.map((value, index) => {
        return (
          <div
            className="board-item"
            key={index}
            style={{
              transform: `rotate(${index * 15}deg)`,
              fill: "white",
            }}
          >
            {value === 1 && <Star className="fill-amber-400" />}
            {value === 2 && <Moon className=" fill-cyan-200" />}
            {value === 3 && <Fire className=" fill-rose-600" />}
            {value === 4 && <Thunder className=" fill-lime-300" />}
            {value === 5 && <Clover className=" fill-zinc-300" />}
          </div>
        );
      })}
    </div>
  );
};

export default Circle;
