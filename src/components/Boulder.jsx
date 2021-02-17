import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Boulder(props) {
  return (
    <div id="boulder">
      {props.boulders.map((boulder) => (
        <div id="boulder-link" key={boulder.id}>
          <h3>
            {boulder.fields.title}, {boulder.fields.location}
          </h3>
          <Link to={`/details/${boulder.id}`}>
            <img
              className="boulder-photo"
              src={boulder.fields.photo}
              alt={boulder.fields.title}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Boulder;
