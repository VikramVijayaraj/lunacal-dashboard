import React from "react";

const Card = ({ card, cardWidth }) => {
  return (
    <li className="" style={{ width: `${cardWidth}px` }}>
      <div className="h-full">
        <img
          className="h-[160px] w-full object-cover rounded-3xl grayscale hover:grayscale-0 hover:scale-110 hover:-rotate-2 hover:translate-x-2 hover:-translate-y-2 transition duration-500"
          src={card}
          alt="Image"
        />
      </div>
    </li>
  );
};

export default Card;
