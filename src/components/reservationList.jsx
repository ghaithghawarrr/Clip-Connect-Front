import React, { useEffect, useState } from "react";
import axios from "axios";
import Avatar from "./avatar";

const ReservationList = ({ barberId }) => {
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState(null);
      const [reservations, setReservations] = useState([]);

      useEffect(() => {
            const fetchReservations = async () => {
                  setLoading(true);
                  try {
                        const response = await axios.get(`http://localhost:8080/api/reservations/by-barber-id?barberId=${barberId}`);
                        if (response.data.data != null) {
                              setReservations(response.data.data);
                        }
                  } catch (error) {
                        setError(error.message);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchReservations();
      }, [barberId]);

      return (
            <div className="rubik justify-center gap-4 p-4 bg-zinc-900 border border-zinc-900 shadow-lg rounded-2xl">
                  <h2 className="text-center text-white jacquard text-3xl">Reservations</h2>
                  {loading ? (
                        <div>Loading...</div>
                  ) : error ? (
                        <div>Error: {error}</div>
                  ) : (
                        <div>
                              {reservations.length > 0 ? (
                                    reservations.map((reservation) => (
                                          <div key={reservation.id} className="bg-white rounded-lg text-center text-black text-xl p-4">
                                                <Avatar imageUrl={reservation.client.user.avatarUrl} size="size-16" />
                                                <p>{reservation.client.user.name}</p>
                                                <p>Reservation ID: {reservation.id}</p>

                                                <p>Reserved on: {reservation.date}</p>
                                                <div style={{ height: '10px' }}></div>
                                          </div>
                                    ))
                              ) : (
                                    <div>
                                          <p className="text-center text-white jacquard text-xl">This barber has no reservations.</p>
                                    </div>
                              )}
                        </div>
                  )}
            </div>
      );
};

export default ReservationList;
