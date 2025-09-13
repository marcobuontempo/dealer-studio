import type { MouseEvent } from "react";
import Button from "../../common/Button";
import CardBody from "./CardBody";
import CardImage from "./CardImage";
import styles from "./styles.module.css";

type Props = {
  isActive: boolean;
  onButtonClick: (event: MouseEvent<HTMLButtonElement>) => void;
  name: string;
  text: string[];
};

const Card = ({ isActive, onButtonClick, name, text }: Props) => {
  return (
    <article
      data-testid="card"
      className={`${styles.card} ${isActive && styles.active}`}
    >
      <CardImage />
      <div className={styles.content}>
        <CardBody name={name} text={text} />
        <Button onClick={onButtonClick}>Button {name}</Button>
      </div>
    </article>
  );
};

export default Card;
