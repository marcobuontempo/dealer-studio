import styles from "./styles.module.css";

type Props = {
  toggleTheme: () => void;
};

const ThemeToggle = ({ toggleTheme }: Props) => {
  return (
    <button className={styles["theme-toggle"]} onClick={toggleTheme}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
