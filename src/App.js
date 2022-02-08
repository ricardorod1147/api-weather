// import { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import './App.css';

// COMPONETS
// import Header from './componets/Custom/Header/Header';
import Home from './view/Home/Home';

// STYLES
import "./view/Home/Home.styles.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />

        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
