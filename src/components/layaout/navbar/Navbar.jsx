import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "../../../Navbar.jsx";

import { Link } from "react-router-dom";
import { menuNavigate } from "../../../routes/menuNavigate";

const Navbar = () => {
  return (
    <>
      <div className={styles.containerNavbar}>
        <Link to="/">A Puro Pedal</Link>
        <ul className={styles.categories}>
          {menuNavigate.map(({ id, path, title }) => (
            <Link key={id} to={path}>
              {title}
            </Link>
          ))}
        </ul>

        <Link to="/carrito">
          <Badge badgeContent={4} color="dark">
            <BsFillCartCheckFill size="20px" />
          </Badge>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
