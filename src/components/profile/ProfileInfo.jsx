import React, { Component } from 'react';
class ProfileInfo extends Component {
  render() {
    return (
      <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
        <div>
          <i class="bi bi-shop"></i>
          <i> shopname</i>
        </div>
        <div>
          <i class="bi bi-person"></i>
          <i> ownername</i>
        </div>
        <div>
          <i class="bi bi-star"></i>
          <i> 4.5</i>
        </div>
        <div>
          <i class="bi bi-crosshair"></i>
          <i> address</i>
        </div>

      </div>
    );
  }
}

export default ProfileInfo;