import React from 'react';
import Footer from '../components/multispot/Footer'
import ProfileCover from '../components/profile/ProfileCover';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfileDetails from '../components/profile/ProfileDetails';
import ExploreNavBar from '../components/explore/ExploreNavBar'
function BarberProfile() {
      return (
            <div className='rubik'>
                  <ExploreNavBar />
                  <div className="col-12 container">
                        <div className="h-100 w-100">
                              <div className="">
                                    <div className="card">
                                          <ProfileCover />
                                          <ProfileDetails name="About Us :" />
                                          <ProfileDetails name="Services :" />
                                          <div className="card-body text-black">
                                                <ProfileInfo />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
                  <Footer />
            </div>
      );
}

export default BarberProfile;
