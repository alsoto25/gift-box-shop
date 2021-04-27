import Footer from "./Footer";
import styles from "../../styles/components/global/Header.module.scss";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="root">

      <header>
      <nav className={styles.navbar}>
        <Link to="/" className={styles.logo}>
          Repasa
          <span className={styles["logo-secondary"]}>giftbox</span>
        </Link>
      </nav>
    </header>

        <main>
            <h1>Hola Mundo</h1>
        </main>

      <Footer />
    </div>
  );
}