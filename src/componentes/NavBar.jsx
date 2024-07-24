import { Link } from "react-router-dom";
import NavBarBootsrap from "./NavBarBootsrap.jsx";

function NavBar(props) {

  if (props.isHeader == true) {
    return (
      <div>
        <NavBarBootsrap />
      </div>
    );
  } else {
    return (
      <nav className="justify-center">
        <Link to="">F.A.Q</Link>
        <br />
        <Link to="">Terminos y Condiciones</Link>
        <br />
        <Link to="">Contacto</Link>
      </nav>
    )
  }

}

export default NavBar