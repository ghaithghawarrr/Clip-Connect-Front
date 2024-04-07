import React, { Component } from 'react';
import ProfileAvatar from './ProfileAvatar';
class ProfileCover extends Component {
  render() {
    return (
      <div className="text-white d-flex flex-row" style={{ backgroundColor: '#222', height: '200px' }}>
        <ProfileAvatar />
        <div className="ms-3" style={{ marginTop: '130px' }}>
          <h5>Shop Owner</h5>
        </div>
      </div>
    );
  }
}

export default ProfileCover;