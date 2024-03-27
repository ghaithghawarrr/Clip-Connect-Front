import React, { Component } from 'react';
import ServiceCard from './ServiceCard';
class Services extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <ServiceCard icon="bi bi-search-heart-fill" name="Discover and Locate Barbershops" discription="The primary purpose of the website is to help users discover and locate barbershops in their area or desired location. This functionality enables users to find nearby barbershops easily, facilitating convenience in choosing a barber." />
          <ServiceCard icon="bi bi-clipboard2-pulse-fill" name="Rate and Review Barbershops" discription="Another purpose is to allow users to rate and review the barbershops they visit. This feature helps other users make informed decisions about which barbershop to visit based on the experiences shared by the community." />
          <ServiceCard icon="bi bi-ticket-detailed-fill" name="Reservation System" discription="The website provides a reservation system that allows users to book appointments with their preferred barbers. This feature enhances user experience by eliminating wait times and ensuring they can secure a time slot that suits their schedule." />
        </div>
      </div>
    );
  }
}

export default Services;