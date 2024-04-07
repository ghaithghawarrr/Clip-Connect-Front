import React, { Component } from 'react';
import Image from '../../assets/haircut 4.jpeg'
class ProfileAvatar extends Component {
  render() {
    return (
      <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
        <img src={Image} alt="Generic placeholder image" className="img-fluid img-thumbnail mt-4 mb-2 rounded-circle" style={{ width: '150px', zIndex: '1' }} />
      </div>
    );
  }
}

export default ProfileAvatar;