import { type MouseEvent, type ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
};

const Button = ({ onClick, children }: Props) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
