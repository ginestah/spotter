import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { Link } from "react-router-dom";
import "./Home.css";

function Home(props) {
  const [boulders, setBoulders] = useState([]);

  useEffect(() => {
    const getBoulders = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setBoulders(resp.data.records);
    };
    getBoulders();
  }, []);

  return (
    <div id="home">
      {boulders.map((boulder) => (
        <div key={boulder.id}>
          <h3>{boulder.fields.title}</h3>
          <Link to={`/problem/${boulder.id}`}>
            <img className="boulder-photo" src={boulder.fields.photo} />
          </Link>
        </div>
      ))}
    </div>
  );
}
export default Home;
