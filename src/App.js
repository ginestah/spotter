import "./App.css";

import { Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Boulder from "./components/Boulder/Boulder";
import Form from "./components/Form/Form";
import About from "./components/About/About";
import Details from "./components/Details/Details";
import Footer from "./components/Footer/Footer";
import Search from "./components/Search/Search";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL, config } from "./services";

function App() {
  const [boulders, setBoulders] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getBoulders = async () => {
      const resp = await axios.get(baseURL, config);
      setBoulders(resp.data.records);
    };
    getBoulders();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <h2>Click on a photo for more details of the climb</h2>
      </Route>
      <Route exact path="/">
        {boulders.map((boulder) => (
          <Boulder key={boulder.id} boulder={boulder} />
        ))}
      </Route>
      <Route path="/details/:id">
        <Details setToggleFetch={setToggleFetch} boulders={boulders} />
      </Route>
      <Route exact path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route path="/search">
        <Search boulders={boulders} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
