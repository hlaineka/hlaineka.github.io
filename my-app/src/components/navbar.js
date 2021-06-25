import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "../scss/main.scss"

const Banner = () => {
  return (
  <div className="banner">
    <i className="fas fa-star star-0"></i>
    <i className="fas fa-star star-1"></i>
    <i className="fas fa-star star-2"></i>
    <i className="fas fa-star star-3"></i>
    <i className="fas fa-star star-4"></i>
    <i className="hlaineka">hlaineka</i>
    <i className="fas fa-star star-5"></i>
    <i className="fas fa-star star-6"></i>
    <i className="fas fa-star star-7"></i>
    <i className="fas fa-star star-8"></i>
    <i className="fas fa-star star-9"></i>
    
  </div>
  )
}

const Navbar = () => {
  return (
    <div className="header-container">
      <Banner />
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About me</Link>
        <Link to="/shells">Shell projects</Link>
      </div>
    </div>
  )
}

export default Navbar;
