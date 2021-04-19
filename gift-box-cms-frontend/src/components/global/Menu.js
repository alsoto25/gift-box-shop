import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import styles from "../../styles/components/global/Header.module.scss";

const menuItems = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Orders",
    url: "/Orders",
  },
  {
    text: "Content",
    url: "/Content",
  },
  {
    text: "Contact",
    url: "/Contact",
  },
  {
    text: "About",
    url: "/About",
  },
];

const BurgerMenu = ({ open, setOpen }) => {
  return (
    <button
      className={`${styles.burger}${open ? ` ${styles["burger-open"]}` : ""}`}
      type="button"
      onClick={function () {
        setOpen(!open);
      }}
    >
      <div />
      <div />
      <div />
    </button>
  );
};

const MenuElements = ({ open }) => {
  const router = useLocation();

  return (
    <div
      className={`${styles["links-container"]}${
        open ? ` ${styles["links-container-open"]}` : ""
      }`}
    >
      {menuItems.map((menuItem) => (
        <Link key={menuItem.text} to={menuItem.url}>
          <a
            className={`${styles.link} ${
              router.pathname === menuItem.url ? styles["link-active"] : ""
            }
                `}
          >
            {menuItem.text}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.menu}>
      <BurgerMenu open={open} setOpen={setOpen} />
      <MenuElements open={open} />
    </div>
  );
}
