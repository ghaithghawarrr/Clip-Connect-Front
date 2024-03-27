import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBarList from '../multispot/NavBarList';
import NavBarAvatar from '../multispot/NavBarAvatar';

class ExploreNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
        <div className="container-fluid">
          <a className="navbar-brand xlabel" href="#">Clip&Connect</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavBarList />

          </div>
          <NavBarAvatar />
        </div>
      </nav>
    );
  }
}

export default ExploreNavBar;