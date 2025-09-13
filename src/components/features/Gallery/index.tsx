import { useEffect, useState } from "react";
import Card from "../Card";
import styles from "./styles.module.css";
import type { CardData } from "../../../types";
import { fetchCardsData } from "../../../utils";
import Button from "../../common/Button";

type Props = {};

const Gallery = ({}: Props) => {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  const [cards, setCards] = useState<CardData[]>([]);
  const [fetchError, setFetchError] = useState(false);

  const fetchData = () => {
    setFetchError(false);
    fetchCardsData()
      .then((data) => {
        setActiveCard(data[Math.floor(data.length / 2)].id);
        setCards(data);
      })
      .catch(() => {
        setFetchError(true);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={styles.gallery}>
      {fetchError ? (
        <p>
          Failed to fetch cards. <Button onClick={fetchData}>Retry</Button>
        </p>
      ) : cards.length === 0 ? (
        <p>Fetching data...</p>
      ) : (
        cards.map((card) => (
          <Card
            key={card.id}
            isActive={activeCard === card.id}
            onButtonClick={() => setActiveCard(card.id)}
            name={card.id}
            text={card.text}
          ></Card>
        ))
      )}
    </section>
  );
};

export default Gallery;
