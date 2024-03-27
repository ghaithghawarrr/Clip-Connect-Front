import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../multispot/Button';
import TextField from './TextField';
class FormBeBarber extends Component {
  render() {
    return (
      <div className="d-flex vh-100 align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
        <form className="xform">
          <h3 className="mb-3 pb-3 xtitle" >be Barber</h3>
          <TextField name="Shop Name" type="text" />
          <div className="row">
            <div className="col">
              <TextField name="Country" type="text" />
            </div>
            <div className="col">
              <TextField name="State" type="text" />
            </div>
          </div>
          <TextField name="City" type="text" />
          <div className="row">
            <div className="col">
              <TextField name="Street" type="text" />
            </div>
            <div className="col">
              <TextField name="Zip Code" type="text" />
            </div>
          </div>
          <Button name="Done" link="#" />
        </form>
      </div>
    );
  }
}

export default FormBeBarber;