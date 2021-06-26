import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Prompt } from "react-router";
import Aboutpage from './pages/about'
import Shellspage from './pages/shells'
import Navbar from './components/navbar'
import "./scss/main.scss"

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/about">
            <Aboutpage />
          </Route>
          <Route path="/">
            <Shellspage />
          </Route>
          <Route path="/shells">
            <Shellspage />
          </Route>
        </Switch>
    </Router>
  );
}

export default App
