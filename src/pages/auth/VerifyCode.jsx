import React, { Component } from 'react';
import FormVerifyCode from '../../components/auth/FormVerifyCode';
import SideImage from '../../components/auth/SideImage';

class VerifyCode extends Component {
  render() {
    return (
      <div className="App">
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 text-black">
                <FormVerifyCode />
              </div>
              <SideImage />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default VerifyCode;