import React from 'react';
import Home from './pages/home';

import {
  Route,
  Switch,BrowserRouter as Router,
} from 'react-router-dom';


import './App.scss';

function App() {
  return (


      <Router>


        <Switch>

          <Route exact path="/" component={Home}/>


        </Switch>

      </Router>

  );
}

export default App;
