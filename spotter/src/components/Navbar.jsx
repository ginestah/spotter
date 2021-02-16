import { Link } from "react-router-dom";
function Navbar(props) {
  return (
    <nav id="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="./new">Add Problem</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
