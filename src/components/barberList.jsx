import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BarberTile from './barberTile';
export default function BarberList({ userId }) {
      const [barbers, setBarbers] = useState([]);
      const [loading, setLoading] = useState(true);

      useEffect(() => {
            const fetchRecommendations = async () => {
                  try {
                        const response = await axios.get(`http://localhost:8080/api/clients/recommendation`, {
                              params: { userId }
                        });
                        setBarbers(response.data.data);
                  } catch (error) {
                        console.error('Error fetching recommendations:', error);
                  } finally {
                        setLoading(false);
                  }
            };

            fetchRecommendations();
      }, [userId]);

      if (loading) {
            return <div>Loading...</div>;
      }

      return (
            <div style={{ height: '400px' }}>
                  {barbers.length > 0 ? (
                        <div className="flex flex-col space-y-4">
                              {barbers.map((barber) => (
                                    <BarberTile key={barber.id} barber={barber} userId={userId} />
                              ))}
                        </div>
                  ) : (
                        <center><div className='text-white'>No nearby barbers found.</div></center>
                  )}
            </div>
      );
}
