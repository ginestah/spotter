import { Link } from "react-router-dom";
import "./Boulder.css";

function Boulder(props) {
  return (
    <div id="boulder">
      <div id="boulder-text">
        <h3>{props.boulder.fields.title}</h3>
        <h3>{props.boulder.fields.location}</h3>
        <h5>{props.boulder.fields.difficulty}</h5>
      </div>
      <Link to={`/details/${props.boulder.id}`}>
        <img
          className="boulder-photo"
          src={props.boulder.fields.photo}
          alt={props.boulder.fields.title}
        />
      </Link>
    </div>
  );
}
export default Boulder;
