import { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/huckleberry-ginesta-84155b186/"
        >
          <i class="fab fa-linkedin"></i>
        </a>
        <a target="_blank" href="https://github.com/ginestah">
          <i class="fab fa-github"></i>
        </a>
        <p>&copy;Huckleberry Ginesta 2021</p>
      </footer>
    );
  }
}
export default Footer;
