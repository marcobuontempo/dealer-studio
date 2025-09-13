import styles from "./styles.module.css";
import cardImage from "../../../assets/brisbane.jpg";
import Button from "../../common/Button";

type Props = {};

const CardImage = ({}: Props) => {
  return (
    <div className={styles["image-container"]}>
      <img className={styles.image} src={cardImage} alt="Card Image" />
      <div className={styles.overlay}>
        <Button onClick={() => null}>Call To Action</Button>
      </div>
    </div>
  );
};

export default CardImage;
