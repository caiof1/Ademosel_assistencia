// CSS
import styles from "./Header.module.css";

// Images
import logo from "../../images/Logo.png";

const Header = () => {
  return (
    <header className={styles.container_header}>
      <div className={styles.logo}>
        <img src={logo} width="180" alt="Logo da Ademosel assistência" />
      </div>
      <div className={styles.container_whatsapp}>
        <i class="fa-brands fa-whatsapp"></i>
        <span>34 9218-4713</span>
      </div>
    </header>
  );
};

export default Header;
