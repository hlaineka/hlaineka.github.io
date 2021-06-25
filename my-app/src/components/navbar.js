import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    </div>
  )
}

export default Navbar;
