import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { InfoCard, ServicesList, ReservationList, Reservation, HairCutsList, Reviews, Navbar, Button } from './import.js'
import axios from 'axios';


export default function BarberProfile() {
      const navigate = useNavigate();
      const location = useLocation();
      const [barber, setBarber] = useState(location.state.barber);

      const handleLogout = () => {
            navigate("/");
      };

      useEffect(() => {
            const fetchBarberById = async () => {
                  try {
                        const response = await axios.get(`http://localhost:8080/api/barbers/${location.state.barber.id}`);
                        setBarber(response.data.data);
                  } catch (error) {
                        console.error('Error fetching barber:', error);
                  }
            };
            fetchBarberById();
      }, [location.state.barber.id]);

      const dynamicPart = location.state.admin ? (
            <Button
                  buttonText="Logout"
                  type="submit"
                  fullWidth={false}
                  onClick={handleLogout}
                  color="bg-white text-black hover:bg-gray-200 focus:ring-gray-200"
            />
      ) : null;

      const menuItems = [
            { label: 'Features', link: '/features' },
            { label: 'Support', link: '/support' },
            { label: 'About Us', link: '/about-us' },
      ];

      return (
            <div className="h-screen rubik">
                  <Navbar
                        title="ClipConnect"
                        menuItems={menuItems}
                        dynamicPart={dynamicPart}
                  />
                  <div className="grid grid-cols-2 gap-2">
                        <div className="container m-4">
                              <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
                                    <InfoCard barber={barber} admin={location.state.admin} />
                                    <ServicesList barberId={barber.id.toString()} admin={location.state.admin}></ServicesList>
                                    {location.state.admin ? (<ReservationList barberId={barber.id.toString()} />) : (<Reservation userId={location.state.userId} barberId={barber.id.toString()} />)}
                              </div>
                        </div>
                        <div className="container p-4 space-y-*">
                              <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
                                    <HairCutsList barberId={barber.id.toString()} admin={location.state.admin}></HairCutsList>
                                    <Reviews barberId={barber.id} clientId={1} admin={location.state.admin} userId={location.state.userId} />
                              </div>
                        </div>
                  </div>
            </div>
      );
}
