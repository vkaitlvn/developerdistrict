// This is App.js, the file that pulls everything together and calls all pages created

import React from 'react';
import './App.css';
// Importing App.css here applies it to the entire project

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import worldsim from './pages/worldsim';
import profiles from './pages/profiles';
import signin from './pages/signin';
// These are all of the pages I created (from top to bottom): Home = Entire main landing page, DDChat page, Worldsim page, Profiles page, sign in page featured on the sign in button on landing page navbar




function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/worldsim" component={worldsim} exact />
        <Route path="/profiles" component={profiles} exact />
        <Route path="/signin" component={signin} exact />



      </Switch>
      
    </Router>
  );
}

export default App;

