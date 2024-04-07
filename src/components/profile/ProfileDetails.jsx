import React, { Component } from 'react';
class ProfileDetails extends Component {
  render() {
    return (
      <div >
        <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
          <p className="font-italic mb-1 xlabel">{this.props.name}</p>
          <p className="font-italic mb-1">
            🔥 Welcome to "Clip & Snip" Barber Shop! 🔥
            <br />
            ✂️💈 Where Style Meets Precision! 💈✂️
          </p>
        </div>
      </div>
    );
  }
}

export default ProfileDetails;