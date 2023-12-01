import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import logo from "../../img/logo.png";
import Container from "./Container";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Costs" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Início</Link>
          </li>
          <li className={styles.item}>
            <Link to="/projects">Projectos</Link>
          </li>
          <li className={styles.item}>
            <Link to="/company">Empresa</Link>
          </li>
          <li className={styles.item}>
            <Link to="/contact">Contacto</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
