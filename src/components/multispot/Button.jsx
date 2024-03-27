import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Button extends Component {
  render() {
    return (
      <div className="mb-2">
        <Link to={this.props.link}>
          <button className="btn btn-primary btn-block" type="button">{this.props.name}</button>
        </Link>
      </div>
    );
  }
}

export default Button;