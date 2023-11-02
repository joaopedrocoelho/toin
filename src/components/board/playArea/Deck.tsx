import React from "react";
import { CardClass } from "src/classes/Card";
import Card from "../../cards/Card";

const Deck = ({ cards }: { cards: CardClass[] }) => {
  return (
    <div className="relative aspect-[8/11] min-w-[150px] cursor-pointer">
      {cards.map((card, index) => {
        return (
          <div
            className="absolute w-[inherit] "
            style={{
              transform: `translateY(${index * -0.7}px)`,
              zIndex: index,
            }}
          >
            <Card
              key={index}
              type={card.type}
              faceUp={false}
              cardProperties={card.getProperties()}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Deck;
