import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blogo from "../../assets/barber-logo.jpg"
import Stars from './Stars';

class RecommendedItem extends Component {
  render() {
    return (
      <div className="card mb-2">
        <div class="d-flex align-items-center">
          <div class="p-2">
            <div style={{ width: 55 }}>
              <img src={Blogo} alt="Barber Profile" className="img-thumbnail" />
            </div>
          </div>
          <div class="p-2 flex-grow-1 bd-highlight">
            <h6 className="card-titl">{this.props.name}</h6>
          </div>
          <div class="p-2">
            <Stars rating={this.props.rating} />
          </div>
        </div></div>
    );
  }
}

export default RecommendedItem;