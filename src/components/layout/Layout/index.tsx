import type { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

// Main structure of the website
const Layout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
