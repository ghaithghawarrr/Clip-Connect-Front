import React, { Component } from 'react';
import FormResetPassword from '../../components/auth/FormResetPassword';
import SideImage from '../../components/auth/SideImage';

class ResetPassword extends Component {
  render() {
    return (
      <div className="App">
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 text-black">
                <FormResetPassword />
              </div>
              <SideImage />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ResetPassword;