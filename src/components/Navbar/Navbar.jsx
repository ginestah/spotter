import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <header>
      <h5>
        Spotter:
        <br />A Boulder Library
      </h5>
      <nav id="nav">
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
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
