import React, { Component } from 'react';
import ExploreNavBar from '../components/explore/ExploreNavBar';
import Map from '../components/explore/Map';
import Footer from '../components/multispot/Footer';
import HairCutList from '../components/explore/HairCutList';
import RecommendedList from '../components/explore/RecommendedList';

class Explore extends Component {
      render() {
            return (
                  <div >
                        <ExploreNavBar />
                        <div className="container mt-4">
                              <div className="row">
                                    <div className="col-lg-8">
                                          <Map />
                                          <RecommendedList />
                                    </div>
                                    <HairCutList />
                              </div>
                        </div>
                        <Footer />
                  </div>
            );
      }
}

export default Explore;
