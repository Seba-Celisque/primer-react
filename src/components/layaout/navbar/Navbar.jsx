import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">A Puro Pedal</Link>
        <ul className={styles.categories}>
          <link to="/category/cascos">Cascos</link>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
