import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../multispot/Button';
import TextField from './TextField';
class FormVerifyCode extends Component {
  render() {
    return (
      <div className="d-flex vh-100 align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
        <form className="xform">
          <h3 className="mb-3 pb-3 xtitle">Verification</h3>
          <TextField name="Code" type="text" />
          <Button name="Verify" link="/resetpassword" />
        </form></div>
    );
  }
}

export default FormVerifyCode;