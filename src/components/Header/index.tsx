import styles from "./header.module.css";
import LogoImg from "../../assets/logo.svg";

export const Header = () => {
  return (
    <header className={styles.Container}>
      <img src={LogoImg} className={styles.Logo} alt="Logo" />
      <h1 className={styles.Title}>Ignite Feed</h1>
    </header>
  );
};
