import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class ButtonLink extends Component {
  render() {
    const { type, name, onClick, disabled } = this.props;
    return (
      <button className="btn btn-link btn-block" type={type} onClick={type === 'button' ? onClick : null} disabled={disabled}>
        {name}
      </button>
    );
  }
}