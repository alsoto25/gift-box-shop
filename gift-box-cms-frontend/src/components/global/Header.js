import { Link } from "react-router-dom";

import Menu from "./Menu";

import styles from "../../styles/components/global/Header.module.scss";

export default function Header() {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          Repasa
          <span className={styles["logo-secondary"]}>giftbox</span>
        </Link>
        <Menu />
      </nav>
    </header>
  );
}
