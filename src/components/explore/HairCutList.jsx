import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import hairstyle1 from "../../assets/haircut 1.jpeg";
import hairstyle2 from "../../assets/haircut 2.jpeg";
import hairstyle3 from "../../assets/haircut 3.jpeg";
import hairstyle4 from "../../assets/haircut 4.jpeg";
import HairCut from './HairCut';

class HairCutList extends Component {
  render() {
    return (
      <div className="col-lg-4 card">
        <h2 className="text-center" style={{ fontFamily: 'Ephesis', fontWeight: 600 }}>Popular Haircut Styles</h2>
        <div className="row">
          <HairCut img={hairstyle1} name="hairstyle1" />
          <HairCut img={hairstyle2} name="hairstyle2" />
          <HairCut img={hairstyle3} name="hairstyle3" />
          <HairCut img={hairstyle4} name="hairstyle4" />
        </div>
      </div>
    );
  }
}

export default HairCutList;