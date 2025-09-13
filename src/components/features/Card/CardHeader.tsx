import styles from "./styles.module.css";

type Props = {
  title: string;
};

const CardHeader = ({ title }: Props) => {
  return <h2 className={styles.header}>{title}</h2>;
};

export default CardHeader;
