import { useState, useEffect } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { Route } from "react-router-dom";
import "./Home.css";
import Details from "./Details";
import Boulder from "./Boulder";

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

  return <div id="home"></div>;
}
export default Home;
