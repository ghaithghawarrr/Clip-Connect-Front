import React, { Component } from 'react';
import Image from "../../assets/shop2.jpg"
class Guide extends Component {
  render() {
    return (
      <div className="container card p-4 mt-4">

        <div className="jumbotron jumbotron-fluid" id="hero">
          <div className="container">
            <h1 className="display-4">Find the Best Barber Near You</h1>
            <p className="lead">Discover top-rated barbershops, book services, and check availability.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Get Started</a>
          </div>
        </div>
      </div >
    );
  }
}

export default Guide;