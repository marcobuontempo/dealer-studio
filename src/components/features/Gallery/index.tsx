import { useState } from "react";
import Card from "../Card";
import styles from "./styles.module.css";

type Props = {};

const cards = [
  {
    id: 0,
    name: "1",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    ],
  },
  {
    id: 1,
    name: "2",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    ],
  },
  {
    id: 2,
    name: "3",
    text: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
      "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    ],
  },
];

const Gallery = ({}: Props) => {
  const [activeCard, setActiveCard] = useState(Math.floor(cards.length / 2));

  return (
    <section className={styles.gallery}>
      {cards.map((card) => (
        <Card
          key={card.id}
          isActive={activeCard === card.id}
          handleClick={() => setActiveCard(card.id)}
          name={card.name}
          text={card.text}
        ></Card>
      ))}
    </section>
  );
};

export default Gallery;
