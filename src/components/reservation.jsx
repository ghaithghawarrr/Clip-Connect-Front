import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./button";

const Reservation = ({ userId, barberId }) => {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [reservation, setReservation] = useState(null);

      useEffect(() => {
            const fetchReservation = async () => {
                  setLoading(true);
                  try {
                        const response = await axios.get(`http://localhost:8080/api/reservations/by-user-id?userId=${userId}`);
                        console.log(response)
                        if (response.data.data != null) {
                              setReservation(response.data.data[0]);
                              console.log(reservation)
                        }
                  } catch (error) {
                        setError(error.message);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchReservation();
      }, [userId]);

      const reserveBarber = async () => {
            try {
                  const currentDate = new Date().toISOString();
                  const response = await axios.post("http://localhost:8080/api/reservations/create", null, {
                        params: {
                              userId: userId,
                              barberId: barberId,
                              date: currentDate
                        }
                  });
                  setReservation(response.data.data);
            } catch (error) {
                  setError(error.message);
            }
      };

      const cancelReservation = async () => {
            try {
                  await axios.delete(`http://localhost:8080/api/reservations/delete?id=${reservation.id}`);
                  setReservation(null);
            } catch (error) {
                  setError(error.message);
            }
      };

      return (
            <div className="rubik justify-center gap-4 p-4 bg-zinc-900 border border-zinc-900 shadow-lg rounded-2xl">
                  <h2 className="text-center text-white jacquard text-3xl">Reservation</h2>
                  {loading ? (
                        <div>Loading...</div>
                  ) : error ? (
                        <div>Error: {error}</div>
                  ) : (
                        <div>
                              {reservation ? (
                                    <div>
                                          <p className="text-center text-white jacquard text-xl">You have already reserved this barber.</p>
                                          <p className="text-center text-white jacquard text-xl">Reseved in : {reservation.date}</p>
                                          <div style={{ height: '10px' }}></div>
                                          <Button buttonText="Cancel Reservation" onClick={cancelReservation} color="bg-white text-black hover:bg-gray-200 focus:ring-gray-200" />
                                    </div>
                              ) : (
                                    <div className="">
                                          <p className="text-center text-white jacquard text-xl">You haven't reserved this barber yet.</p>
                                          <div style={{ height: '10px' }}></div>
                                          <Button buttonText="Reserve Barber" onClick={reserveBarber} />
                                    </div>
                              )}
                        </div>
                  )}
            </div>
      );
};

export default Reservation;
