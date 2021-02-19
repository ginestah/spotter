import { Link } from "react-router-dom";

function Boulder(props) {
  return (
    <div id="boulder">
      <div id="boulder-link">
        <h3>
          {props.boulder.fields.title}, {props.boulder.fields.location}
        </h3>
        <Link to={`/details/${props.boulder.id}`}>
          <img
            className="boulder-photo"
            src={props.boulder.fields.photo}
            alt={props.boulder.fields.title}
          />
        </Link>
      </div>
    </div>
  );
}
export default Boulder;
