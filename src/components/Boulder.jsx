import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Boulder(props) {
  return (
    <div>
      {props.boulders.map((boulder) => (
        <div key={boulder.id}>
          <h3>{boulder.fields.title}</h3>
          <Link to={`/details/${boulder.id}`}>
            <img
              className="boulder-photo"
              src={boulder.fields.photo}
              alt={boulder.fields.title}
            />
          </Link>
          {boulder.fields.quality == 5 ? (
            <p>⭐️⭐️⭐️⭐️⭐️</p>
          ) : boulder.fields.quality == 4 ? (
            <p>⭐️⭐️⭐️⭐️</p>
          ) : boulder.fields.quality == 3 ? (
            <p>⭐️⭐️⭐️</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
export default Boulder;
