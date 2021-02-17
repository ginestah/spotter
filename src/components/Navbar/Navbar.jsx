import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar(props) {
  return (
    <header>
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
          <li>
            <input id="search-input" type="text" />
            <button>Search</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
