import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from '../multispot/ButtonLink';
class SuccessOperation extends Component {
  render() {
    return (
      <div className="d-flex vh-100 align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
        <form className="xform">
          <div className="container mt-5">
            <h2>Password Reset Successful</h2>
            <p>Your password has been successfully reset. You can now sign in using your new password.</p>
          </div>
          <ButtonLink name="Go log in" link="/login" />
        </form></div>
    );
  }
}

export default SuccessOperation;