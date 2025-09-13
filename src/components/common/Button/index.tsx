import { type MouseEvent, type ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  handleClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

const Button = ({ handleClick, children }: Props) => {
  return (
    <button className={styles.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
