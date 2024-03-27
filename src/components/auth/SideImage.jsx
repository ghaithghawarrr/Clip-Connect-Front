import React, { Component } from 'react';
import Image from '../../assets/side_image.jpg'

class SideImage extends Component {
  render() {
    return (
      <div className="col-sm-4 px-0 d-none d-sm-block">
        <img
          src={Image}
          alt="Login image"
          className="w-100 vh-100 xsideimage"
        />
      </div>
    );
  }
}

export default SideImage;
