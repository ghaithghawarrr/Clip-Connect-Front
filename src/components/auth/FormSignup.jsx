import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from './TextField';
import Button from '../multispot/Button';
import HalfLinkText from './HalfLinkText';
import RadioList from './RadioList';
class FormSignup extends Component {
  render() {
    return (
      <div className="d-flex vh-100 align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
        <form className="xform">
          <h3 className="mb-3 pb-3 xtitle">Sign up</h3>
          <TextField name="Username" type="text" />
          <TextField name="Email" type="email" />
          <TextField name="Password" type="password" />
          <TextField name="Confirm Password" />
          <RadioList info={{ name: "Account Type:", options: ["Customer", "Barber"] }} />
          <Button name="Sign up" link="#" />
          <HalfLinkText nonlinktext="Already have an account? " linktext="Log in" to="/login" />
        </form>
      </div>
    );
  }
}

export default FormSignup;