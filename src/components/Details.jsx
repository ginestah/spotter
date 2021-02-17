import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Details.css";
function Details(props) {
  const params = useParams();
  const climb = props.boulders.find((boulder) => boulder.id === params.id);
  if (!climb) {
    return <h4>Loading...</h4>;
  }
  return (
    <div id="details">
      <h1 id="details-title">{climb.fields.title}</h1>
      <img id="details-photo" src={climb.fields.photo} />
      <div>
        <h3>Rate it:</h3>
        <span class="rating">☆</span>
        <span class="rating">☆</span>
        <span class="rating">☆</span>
        <span class="rating">☆</span>
        <span class="rating">☆</span>
      </div>
      <p>
        Currently rated:{climb.fields.quality}
        <span className="current-rating">☆</span>'s
      </p>
      <main id="details-description">{climb.fields.description}</main>
      <p>{climb.fields.location}</p>
      <p>Contributed by: {climb.fields.author}</p>
      <p>Rated: {climb.fields.difficulty}</p>
    </div>
  );
}
export default Details;
