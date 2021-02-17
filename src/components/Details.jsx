import { useParams } from "react-router-dom";
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
      {climb.fields.quality == 5 ? (
        <p id="details-quality">⭐️⭐️⭐️⭐️⭐️</p>
      ) : climb.fields.quality == 4 ? (
        <p id="details-quality">⭐️⭐️⭐️⭐️</p>
      ) : climb.fields.quality == 3 ? (
        <p id="details-quality">⭐️⭐️⭐️</p>
      ) : null}
      <main id="details-description">{climb.fields.description}</main>
    </div>
  );
}
export default Details;
