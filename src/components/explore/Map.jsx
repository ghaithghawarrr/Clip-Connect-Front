import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Map extends Component {
  render() {
    return (
      <div className="map-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.7852569647914!2d-0.14177278422731995!3d51.507351882086505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce26d1259f%3A0x52963a5addd52a99!2sBig%20Ben!5e0!3m2!1sen!2suk!4v1647407812575!5m2!1sen!2suk" width="100%" height="100%" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    );
  }
}

export default Map;