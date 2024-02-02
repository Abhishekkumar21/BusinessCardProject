import React from "react";
import Card from "./Card";

export function CardList({ cards }) {
  return (
    <div>
      {cards.map((card) => (
        <Card key={card._id} card={card} />
      ))}
    </div>
  );
}
