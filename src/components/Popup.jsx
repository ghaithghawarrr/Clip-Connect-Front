import React, { Component } from 'react';
import ProfileCover from '../components/profile/ProfileCover';
import ProfileInfo from '../components/profile/ProfileInfo';

class Popup extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  isOpen: false
            };
      }

      togglePopup = () => {
            this.setState(prevState => ({
                  isOpen: !prevState.isOpen
            }));
      };

      render() {
            const { isOpen } = this.state;

            return (
                  <div>
                        <button className='btn btn-link' onClick={this.togglePopup}>{this.props.name}</button>
                        {isOpen && (
                              <div className="popup">
                                    <div className="popup-content rounded rounded-2" style={{ width: '500px' }}>
                                          <div className="card">
                                                <ProfileCover />
                                                <div className="card-body text-black">
                                                      <ProfileInfo />
                                                </div>
                                          </div>
                                          <div className='p-2'>
                                                <button className="btn btn-primary" onClick={this.togglePopup}>Close</button>
                                          </div>
                                    </div>
                              </div>
                        )}
                  </div>
            );
      }
}

export default Popup;
