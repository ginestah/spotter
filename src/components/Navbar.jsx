import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <header>
      <nav id="nav">
        <ul>
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
