import './App.css';


import { Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Boulder from './components/Boulder';
import Form from './components/Form';
import About from './components/About';
import Details from './components/Details';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseURL, config } from './services';

function App() {
  const [boulders, setBoulders] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getBoulders = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setBoulders(resp.data.records);
    };
    getBoulders();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Navbar />
      <Route exact path='/'>
        <Boulder boulders={boulders} />
        </Route>
      <Route path="/details/:id">
        <Details setToggleFetch={setToggleFetch} boulders={boulders} />
      </Route>
      <Route exact path='/new'>
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
    </div>
  );
}

export default App;
