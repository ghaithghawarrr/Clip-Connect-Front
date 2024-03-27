import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class HalfLinkText extends Component {
  render() {
    return (
      <p>{this.props.nonlinktext}<Link to={this.props.to} className="link-primary" >{this.props.linktext}</Link></p>
    );
  }
}

export default HalfLinkText;