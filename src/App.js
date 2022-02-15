import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';

// ReactDOM.render(
//   <MyComponent/>
//   document.getElementById("root")
// );



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />


      </Switch>
      
    </Router>
  );
}

export default App;

