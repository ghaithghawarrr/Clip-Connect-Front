import React, { useState, useEffect } from "react";
import axios from "axios";
import { Map, Marker } from "pigeon-maps";
import PopUp from "./popup";
import Lottie from "lottie-react";
import animationData from "../../assets/animation/marker-blue.json";

export default function MyMap({ userId }) {
      const [selectedBarber, setSelectedBarber] = useState(null);
      const [barbers, setBarbers] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
      const [userLocation, setUserLocation] = useState(null);
      const [updatingLocation, setUpdatingLocation] = useState(false);

      useEffect(() => {
            const fetchData = async () => {
                  try {
                        const response = await axios.get("http://localhost:8080/api/barbers");
                        const barbersList = Object.values(response.data.data);
                        console.log(barbersList)
                        setBarbers((prevBarbers) => [...prevBarbers, ...barbersList]);
                        setLoading(false);
                  } catch (error) {
                        setError("Error fetching barbers. Please try again later.");
                        console.error("Error fetching barbers:", error);
                        setLoading(false);
                  }
            };

            fetchData();
      }, []);

      useEffect(() => {


            if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                        (position) => {
                              setUserLocation([position.coords.latitude, position.coords.longitude]);

                              updateUserLocation(position.coords.latitude, position.coords.longitude);
                        },
                        (error) => {
                              console.error("Error getting user location:", error);
                        }
                  );
                  console.log("wtf")
            } else {
                  console.error("Geolocation is not supported by this browser.");
            }
      }, []);

      const updateUserLocation = async (latitude, longitude) => {
            try {
                  console.log(userId)
                  if (userId && !updatingLocation) {

                        setUpdatingLocation(true);
                        await axios.put(`http://localhost:8080/api/users/updateLocation?userId=${userId}`, {
                              latitude,
                              longitude,
                        });
                        setUpdatingLocation(false);
                  }
            } catch (error) {
                  console.error("Error updating user location:", error);
                  setUpdatingLocation(false);
            }
      };

      const handleBarberClick = (barber) => {
            setSelectedBarber((prevBarber) => (prevBarber && prevBarber.id === barber.id ? null : barber));
      };

      const generateKeyById = (id) => {
            const nr1 = getRandomNumber(5, id)
            const nr2 = getRandomNumber(id, nr1)
            return `marker-${id + nr1 * 10000 + nr2 * 100000}`;
      };
      const getRandomNumber = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
      }
      return (
            <div>
                  {loading ? (
                        <div style={{ height: 500, display: "flex", justifyContent: "center", alignItems: "center" }}>

                              <div style={{ marginLeft: 20 }}>Loading...</div>
                        </div>
                  ) : (




                        <div className="relative">

                              <Map height={500} width={1000} defaultCenter={userLocation || [35.767913, 10.819321]} defaultZoom={16}>

                                    {userLocation && (
                                          <Marker anchor={userLocation} payload={1} onClick={({ event, anchor, payload }) => { }}>

                                                <Lottie animationData={animationData} loop autoplay style={{ width: 50, height: 50 }} />
                                          </Marker>
                                    )}


                                    {barbers.map((barber) => (
                                          <Marker
                                                key={generateKeyById(barber.id, barber.id)} // Generate unique key for each marker
                                                anchor={
                                                      barber.location
                                                            ? [barber.location.latitude, barber.location.longitude]
                                                            : [0, 0]
                                                }
                                                onClick={() => handleBarberClick(barber)}
                                                color="SteelBlue"
                                          />
                                    ))}


                              </Map>

                              {selectedBarber && <PopUp barber={selectedBarber} userId={userId} />}
                        </div>
                  )}
            </div>
      );
}
