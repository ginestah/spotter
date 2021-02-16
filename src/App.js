import './App.css';


import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Form from './components/Form';



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
    </div>
  );
}

export default App;
