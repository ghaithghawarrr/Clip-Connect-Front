import React, { Component } from 'react';

import HomeNavBar from '../components/home/HomeNavBar';
import Footer from '../components/multispot/Footer';
import HomeImage from '../components/home/HomeImage';
import FormContactUs from '../components/home/FormContactUs';
import Guide from '../components/home/Guide';
import Services from '../components/home/Services';
class Home extends Component {
      render() {
            return (
                  <div className='rubik'>
                        <HomeNavBar />
                        <HomeImage />
                        <Guide />
                        <Services />
                        <FormContactUs />
                        <Footer />
                  </div>
            );
      }
}

export default Home;
