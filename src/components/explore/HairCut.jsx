import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HairCut extends Component {
  render() {
    return (
      <div className="col-md-6 mb-4">
        <div className="haircut-container">
          <img src={this.props.img} alt="Haircut" className="haircut-img" />
          <div className="haircut-name">{this.props.name}</div>
        </div>
      </div>
    );
  }
}

export default HairCut;