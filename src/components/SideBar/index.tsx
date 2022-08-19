import styles from "./sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

export const SideBar = () => {
  return (
    <aside className={styles.Container}>
      <img
        src="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=500&q50"
        className={styles.Cover}
      />
      <div className={styles.Profile}>
        <Avatar username="maykonsousa"/>
        <strong>Maykon Sousa</strong>
        <span>Front-End Developer</span>
      </div>

      <footer className={styles.Footer}>
        <a href="#">
          <PencilLine />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
};
