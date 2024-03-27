import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hairstyle4 from "../../assets/haircut 4.jpeg";
class ExploreNavBar extends Component {
  render() {
    return (
      <div>
        <img src={hairstyle4} alt="Avatar" className="avatar" />
      </div>
    );
  }
}

export default ExploreNavBar;