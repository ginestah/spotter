import { useState } from "react";
import Boulder from "../Boulder/Boulder";
import "./Search.css";
const Search = (props) => {
  const [location, setLocation] = useState("");
  const [difficulty, setDifficulty] = useState("");
  //type ahead followed tutorial from Soleil Solomon workshop
  const filteredBoulders = props.boulders.filter((boulder) =>
    boulder.fields.location.toLowerCase().includes(location.toLowerCase())
  );

  const filteredDifficulty = props.boulders.filter((boulder) =>
    boulder.fields.difficulty.toLowerCase().includes(difficulty.toLowerCase())
  );
  return (
    <div id="search-parent">
      <div className="search">
        <label htmlFor="search-difficulty">Search by difficulty, Vscale:</label>
        <input
          id="search-difficulty"
          value={difficulty}
          type="text"
          onChange={(e) => setDifficulty(e.target.value)}
        ></input>

        <div className="search-results">
          {difficulty &&
            filteredDifficulty.map((boulder) => <Boulder boulder={boulder} />)}
        </div>
      </div>
      <div className="search">
        <label htmlFor="search-location">
          Search by location (ie. NM or Socorro):
        </label>
        <input
          id="search-location"
          value={location}
          type="text"
          onChange={(e) => setLocation(e.target.value)}
        />

        {location ? (
          <div className="search-results">
            {location &&
              filteredBoulders.map((boulder) => <Boulder boulder={boulder} />)}
          </div>
        ) : (
          <div id="filler"></div>
        )}
      </div>
    </div>
  );
};
export default Search;
