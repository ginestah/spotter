import './App.css';


import { Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Form from './components/Form';
import About from './components/About';



function App() {
  return (
    <div className="App">
        <Navbar />
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route exact path='/new'>
        <Form />
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
    </div>
  );
}

export default App;
