import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";

function Home(props) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [difficulty, setDifficulty] = useState("");

  useEffect(() => {
    const getBoulders = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
    };
    getBoulders();
  }, []);

  return <div id="home"></div>;
}
export default Home;
