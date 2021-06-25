import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Prompt } from "react-router";
import Homepage from './pages/home'
import Aboutpage from './pages/about'
import Navbar from './components/navbar'

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <Switch>
          <Route path="/about">
            <Aboutpage />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
