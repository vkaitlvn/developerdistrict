import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import DDchat from './pages/DDchat';
import worldsim from './pages/worldsim';
import profiles from './pages/profiles';
import signin from './pages/signin';

// ReactDOM.render(
//   <MyComponent/>
//   document.getElementById("root")
// );



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/DDchat" component={DDchat} exact />
        <Route path="/worldsim" component={worldsim} exact />
        <Route path="/profiles" component={profiles} exact />
        <Route path="/signin" component={signin} exact />


      </Switch>
      
    </Router>
  );
}

export default App;

