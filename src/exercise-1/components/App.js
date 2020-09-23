import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header/Header"
import Home from "./Home/Home";
import MyProfile from "./MyProfile/MyProfile";
import AboutUs from "./AboutUs/AboutUs";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/my-profile" component={MyProfile} />
          <Route exact path="/about-us" component={AboutUs} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
