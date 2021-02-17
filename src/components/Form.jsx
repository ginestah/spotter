import axios from "axios";
import { useState, useEffect } from "react";
import { baseURL, config } from "../services";
import { useHistory, useParams } from "react-router-dom";
import "./Form.css";

function Form() {
  const [title, setTitle] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
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
          <button disabled={true} type="submit">
            Uhoh!
          </button>
          <h3>Please fill out all inputs to submit form.</h3>
        </div>
      );
    } else {
      return (
        <div>
          <button disabled={false} type="submit">
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
    };
    await axios.post(baseURL, { fields }, config);
    history.push("/");
  };

  return (
    <div className="containter">
      <form onSubmit={handleSubmit}>
        <ul className="flex-outer">
          <li>
            <label htmlFor="title">Title:</label>
            <input
              value={title}
              type="text"
              id="title"
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="difficulty">Difficulty:</label>
            <input
              value={difficulty}
              type="text"
              id="difficulty"
              onChange={(e) => setDifficulty(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="location">Location:</label>
            <input
              value={location}
              type="text"
              id="location"
              onChange={(e) => setLocation(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="photo-url">
              Photo URL(please use hosting site for photos):
            </label>
            <input
              value={photo}
              type="text"
              id="photo-url"
              onChange={(e) => setPhoto(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="author">Author:</label>
            <input
              value={author}
              type="text"
              id="author"
              onChange={(e) => setAuthor(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="description">Description:</label>
            <textarea
              cols="60"
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
