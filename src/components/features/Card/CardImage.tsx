import styles from "./styles.module.css";
import cardImage from "../../../assets/brisbane.jpg";

type Props = {};

const CardImage = ({}: Props) => {
  return <img className={styles.image} src={cardImage} alt="Card Image" />;
};

export default CardImage;
