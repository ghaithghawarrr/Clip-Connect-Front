import React, { Component } from 'react';
class ServiceCard extends Component {
  render() {
    return (
      <div className="col-md-4 mb-4">
        <div className="card" style={{ height: '280px' }}>
          <div className="card-body">
            <i className={this.props.icon} style={{ fontSize: "30px" }}></i>
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.discription}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ServiceCard;