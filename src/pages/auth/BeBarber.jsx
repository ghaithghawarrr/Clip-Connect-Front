import React, { Component } from 'react';
import FormBeBarber from '../../components/auth/FormBeBarber';
import SideImage from '../../components/auth/SideImage';

class BeBarber extends Component {
  render() {
    return (
      <div className="App">
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 text-black">
                <FormBeBarber />
              </div>
              <SideImage />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default BeBarber;