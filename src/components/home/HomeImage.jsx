import React, { Component } from 'react';
import Image from "../../assets/shop.jpg"
class HomeImage extends Component {
  render() {
    return (
      <img className="img-fluid" src={Image} style={{ objectFit: 'contain' }}></img>
    );
  }
}

export default HomeImage;