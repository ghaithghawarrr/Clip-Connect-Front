import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class NavBarList extends Component {
  render() {
    return (
      <div>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active xtext" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active xtext" aria-current="page" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active xtext" aria-current="page" href="#">About</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBarList;