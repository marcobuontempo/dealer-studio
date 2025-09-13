import styles from "./styles.module.css";
import CardHeader from "./CardHeader";

type Props = {
  name: string;
  text: string[];
};

const CardBody = ({ name, text }: Props) => {
  return (
    <div className={styles.body}>
      <CardHeader title={`Heading ${name}`} />
      <div className={styles.paragraphs}>
        {text.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default CardBody;
