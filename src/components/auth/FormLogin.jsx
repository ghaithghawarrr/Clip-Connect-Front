import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../multispot/Button';
import TextField from './TextField';
import HalfLinkText from './HalfLinkText';
class FormLogin extends Component {
  render() {
    return (
      <div className="d-flex vh-100 align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
        <form className="xform">
          <h3 className="mb-3 pb-3 xtitle">Log in</h3>
          <TextField name="Email" type="email" />
          <TextField name="Password" type="password" />
          <Button name="Log in" link="#" />
          <p className="small mb-5 pb-lg-2" ><Link className="text-muted" to="/checkemail">Forgot password?</Link></p>
          <HalfLinkText nonlinktext="Don't have an account? " linktext="Register here" to="/signup" />
        </form>
      </div>
    );
  }
}

export default FormLogin;