import React, { Component } from 'react';
import FormSignup from '../../components/auth/FormSignup';
import SideImage from '../../components/auth/SideImage';

class Signup extends Component {
  render() {
    return (
      <div className='rubik'>
        <section className="vh-100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-8 text-black">
                <FormSignup />
              </div>
              <SideImage />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Signup;