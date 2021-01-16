import React from 'react';
import './App.css';
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import BottomBar from './components/BottomBar';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/About" component={About} />
        <Route path="/Education" component={Resume} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />

        <Route path="">
          <Redirect to="/About" />
        </Route>
      </Switch>
      <BottomBar />
    </>
  );
}

export default App;
