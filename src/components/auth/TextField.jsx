import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../multispot/Button';
class TextField extends Component {
  render() {
    return (
      <div className="form-outline mb-2">
        <label className="form-label xlabel" htmlFor="form2Example18" >{this.props.name}</label>
        <input type={this.props.type} id="form2Example18" className="form-control" />
      </div>
    );
  }
}

export default TextField;