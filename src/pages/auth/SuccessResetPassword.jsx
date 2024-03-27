import React, { Component } from 'react';
import SuccessOperation from '../../components/auth/SuccessOperation';
import SideImage from '../../components/auth/SideImage';

class SuccessResetPassword extends Component {
  render() {
    return (
      <div className="App">
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 text-black">
                <SuccessOperation />
              </div>
              <SideImage />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default SuccessResetPassword;