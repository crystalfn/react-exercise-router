import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './header.css';

class Header extends Component {
  state = {
    homeUrl: "/",
    myProfileUrl: "/my-profile",
    aboutUsUrl: "/about-us",
  }
  render() {
    return (
      <nav className="header">
        <ul>
          <li><NavLink className="link" to={this.state.homeUrl}>Home</NavLink></li>
          <li><NavLink className="link" to={this.state.myProfileUrl}>My Profile</NavLink></li>
          <li><NavLink className="link" to={this.state.aboutUsUrl}>About Us</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Header;