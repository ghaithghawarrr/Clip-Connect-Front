import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Stars extends Component {
  renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5 ? 1 : 0;
    const emptyStars = 5 - filledStars - halfStar;

    const stars = [];
    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
    }

    // Half star
    if (halfStar === 1) {
      stars.push(<i key="half" className="bi bi-star-half"></i>);
    }

    // Filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    return stars;
  };

  render() {
    const { rating } = this.props;

    return (
      <div className="rating">
        {this.renderStars(rating)}
      </div>
    );
  }
}

export default Stars;
