import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RecommendedItem from './RecommendedItem';

class RecommendedList extends Component {
  render() {
    return (
      <div className="mt-4">
        <h4 className="text-center xtext">Recommended Barbers Nearby</h4>
        <ul className="list-group">
          <RecommendedItem name="Walter White" rating="5" />
          <RecommendedItem name="Sukuna" rating="4" />
          <RecommendedItem name="Bi2" rating="2.5" />
          <RecommendedItem name="WWW" rating="3" />
          <RecommendedItem name="Nito" rating="1" />
        </ul>
      </div>
    );
  }
}

export default RecommendedList;