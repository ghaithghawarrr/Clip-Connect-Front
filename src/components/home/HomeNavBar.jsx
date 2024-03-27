import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBarList from '../multispot/NavBarList';
import Button from '../multispot/Button';
import ButtonLight from '../multispot/ButtonLight';

class HomeNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
        <div className="container-fluid">
          <a className="navbar-brand xlabel" href="#">Clip&Connect</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavBarList />

          </div>
          <ButtonLight name="Sign up" link="/Signup" />
          <div style={{ width: 8 }}></div>
          <Button name="Log in" link="/Login" />
        </div>
      </nav>
    );
  }
}

export default HomeNavBar;