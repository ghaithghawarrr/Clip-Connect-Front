import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class ButtonLight extends Component {
  render() {
    const { type, name, onClick } = this.props;
    return (
        <button className="btn btn-light btn-block" type={type} onClick={type === 'button' ? onClick : null}>
          {name}
        </button>
    );
  }
}

