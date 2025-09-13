import type { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
  theme: "light" | "dark";
};

// Main structure of the website
const Layout = ({ children, theme }: Props) => {
  return (
    <div className={`${styles.layout} ${theme}`}>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
