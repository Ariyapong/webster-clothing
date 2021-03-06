import React from "react";
import { Route, Switch } from 'react-router-dom';
// import logo from "./logo.svg";
import "./App.css";

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    // <div>
    //   <HomePage />
    // </div>
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
