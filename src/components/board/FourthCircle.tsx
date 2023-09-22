import React from "react";
/// <reference types="vite-plugin-svgr/client" />
import "./circle.css";
import Star from "@assets/star.svg";
import Moon from "@assets/Moon.svg";
import Fire from "@assets/fire.svg";
import Clover from "@assets/clover.svg";
import Thunder from "@assets/Thunder.svg";

const FourthCircle = () => {
  //an array of length 24 filled with the numbers 1 to 5 repeated randomly
  const randomArray = Array.from(
    { length: 24 },
    () => Math.floor(Math.random() * 5) + 1
  );
  return (
    <div className="circle">
      {randomArray.map((value, index) => {
        return (
          <div
            className="board-item"
            key={index}
            style={{
              transform: `rotate(${index * 15}deg)`,
            }}
          >
            {value === 1 && <Star />}
            {value === 2 && <Moon />}
            {value === 3 && <Fire />}
            {value === 4 && <Thunder />}
            {value === 5 && <Clover />}
          </div>
        );
      })}
    </div>
  );
};

export default FourthCircle;
