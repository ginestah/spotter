import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import axios from "axios";
import "./Details.css";
function Details(props) {
  const params = useParams();
  let num = 0;

  const handleClick = (e) => {
    let x = e.target.id;
    switch (x) {
      case "one":
        console.log("button 1 was clicked");
        num =
          (climb.fields.quality * climb.fields.ratings + 1) /
          (climb.fields.ratings + 1);
        patchQuality();
        break;
      case "two":
        console.log("button two was clicked");
        num =
          (climb.fields.quality * climb.fields.ratings + 2) /
          (climb.fields.ratings + 1);
        patchQuality();
        break;
      case "three":
        console.log("button 3");
        num =
          (climb.fields.quality * climb.fields.ratings + 3) /
          (climb.fields.ratings + 1);
        patchQuality();
        break;
      case "four":
        console.log("button 4");
        num =
          (climb.fields.quality * climb.fields.ratings + 4) /
          (climb.fields.ratings + 1);
        patchQuality();
        break;
      case "five":
        console.log("button five");
        num =
          (climb.fields.quality * climb.fields.ratings + 5) /
          (climb.fields.ratings + 1);
        patchQuality();
        break;
      default:
        return false;
    }
  };

  const patchQuality = async (quality) => {
    const fields = {
      quality: num,
      ratings: climb.fields.ratings + 1,
    };
    const boulderURL = `${baseURL}/${params.id}`;
    await axios.patch(boulderURL, { fields }, config);
    props.setToggleFetch((curr) => !curr);
  };

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
        <span onClick={handleClick} id="one" className="rating">
          ☆
        </span>
        <span onClick={handleClick} id="two" className="rating">
          ☆
        </span>
        <span onClick={handleClick} id="three" className="rating">
          ☆
        </span>
        <span onClick={handleClick} id="four" className="rating">
          ☆
        </span>
        <span onClick={handleClick} id="five" className="rating">
          ☆
        </span>
      </div>
      <p>
        Currently rated:{climb.fields.quality.toPrecision(3)}
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
