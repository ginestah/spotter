import { Link } from "react-router-dom";
import { useMediaPredicate } from "react-media-hook";
import Burger from "../Burger";
import "./Navbar.css";
function Navbar(props) {
  const biggerThan400 = useMediaPredicate("(min-width:500px)");
  const smallerThan400 = useMediaPredicate("(max-width:500px)");
  return (
    <header>
      <h5>
        Spotter:
        <br />A Boulder Library
      </h5>
      <Burger />
      {/* <nav id="nav" id="main-menu">
        <ul id="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/new">Add Problem</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul> */}
      {/* </nav> */}
    </header>
  );
}
export default Navbar;
