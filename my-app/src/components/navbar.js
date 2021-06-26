import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "../scss/main.scss"

const Banner = () => {
  return (
  <div className="banner">
    <div className="centerBanner">
      <hr className="bannerHr"/>
      <div className="name-and-stars">
        <div className="leftstars">
          <i className="fas fa-star star-0"></i>
          <i className="fas fa-star star-1"></i>
          <i className="fas fa-star star-2"></i>
          <i className="fas fa-star star-3"></i>
          <i className="fas fa-star star-4"></i>
        </div>
        <div className="nameBox">
          <i className="helvi">HELVI LAINEKALLIO</i>
        </div>
        <div className="rightstars">
          <i className="fas fa-star star-5"></i>
          <i className="fas fa-star star-6"></i>
          <i className="fas fa-star star-7"></i>
          <i className="fas fa-star star-8"></i>
          <i className="fas fa-star star-9"></i>
        </div>
      </div>
      <div className="nickBox">
        <i className="hlaineka"> @hlaineka</i>
        </div>
      <hr className="bannerHr"/>
    </div>
  </div>
  )
}

const Navbar = () => {
  return (
    <div className="header-container">
      <Banner />
      <div className="navbar">
      <div className="centerNavbar">
        <Link className="headerLink" to="/shells">Shell projects</Link>
        <Link className="headerLink" to="/about">About me</Link>
      </div>
      </div>
    </div>
  )
}

export default Navbar;
