import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../../services";
import { useHistory } from "react-router-dom";
import "./Form.css";
import { useMediaPredicate } from "react-media-hook";

function Form(props) {
  const smallerThan600 = useMediaPredicate("(max-width:600px)");
  const largerThan600 = useMediaPredicate("(min-width:600px)");
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [quality, setQuality] = useState(0);
  const history = useHistory();

  const checkButton = () => {
    if (
      title == "" ||
      difficulty == "" ||
      location == "" ||
      photo == "" ||
      description == "" ||
      author == ""
    ) {
      return (
        <div>
          <h3 className="bouncy">Please fill out all inputs to submit form.</h3>
        </div>
      );
    } else {
      return (
        <div>
          <button className="popOut vivify" disabled={false} type="submit">
            Submit
          </button>
        </div>
      );
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      title,
      difficulty,
      location,
      photo,
      description,
      author,
      quality: Number(quality),
      ratings: 1,
    };
    await axios.post(baseURL, { fields }, config);
    history.push("/");
    props.setToggleFetch((curr) => !curr);
  };

  return (
    <div className="containter">
      <form onSubmit={handleSubmit}>
        <ul className="flex-outer">
          <li>
            <label htmlFor="title">{largerThan600 && "Title:"}</label>
            <input
              value={title}
              type="text"
              id="title"
              placeholder={smallerThan600 ? "Title:" : null}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="difficulty">{largerThan600 && "Difficulty:"}</label>
            <input
              placeholder={smallerThan600 ? "Difficulty" : null}
              value={difficulty}
              type="text"
              id="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="location">{largerThan600 && "Location:"}</label>
            <input
              placeholder={smallerThan600 ? "Location" : null}
              value={location}
              type="text"
              id="location"
              onChange={(e) => setLocation(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="photo-url">
              {largerThan600 && "Photo URL(please use hosting site):"}
            </label>
            <input
              placeholder={smallerThan600 ? "URL to photo" : null}
              value={photo}
              type="text"
              id="photo-url"
              onChange={(e) => setPhoto(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="author">{largerThan600 && "Author:"}</label>
            <input
              placeholder={smallerThan600 ? "Author" : null}
              value={author}
              type="text"
              id="author"
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="quality">
              <span id="stars">☆</span>'s
            </label>
            <select onChange={(e) => setQuality(e.target.value)}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </li>
          <li>
            <label htmlFor="description">
              {largerThan600 && "Description:"}
            </label>
            <br />
            <textarea
              placeholder={smallerThan600 ? "Description" : null}
              cols={smallerThan600 ? "22" : "50"}
              rows="5"
              value={description}
              type="text"
              id="description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </li>
          <div>{checkButton()}</div>
        </ul>
      </form>
    </div>
  );
}
export default Form;
