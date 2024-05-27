import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NonActive from '../assets/animation/notbusy.json'
import Active from '../assets/animation/busy.json'
import Lottie from 'lottie-react';
const BusySwitch = ({ barberId, admin }) => {
      const [busy, setBusy] = useState(false);

      useEffect(() => {
            const fetchBusyStatus = async () => {
                  try {
                        const response = await axios.get(`http://localhost:8080/api/barbers/get-busy?id=${barberId}`);
                        setBusy(response.data.data);
                  } catch (error) {
                        console.error('Error fetching busy status:', error);
                  }
            };

            fetchBusyStatus();
      }, [barberId]);

      const toggleBusyStatus = async () => {
            try {
                  const response = await axios.put(`http://localhost:8080/api/barbers/busy-switch?id=${barberId}`);
                  setBusy(response.data.data.busy);
            } catch (error) {
                  console.error('Error toggling busy status:', error);
            }
      };

      const switchStyle = busy
            ? { background: '#60a5fa', boxShadow: '0 0 0 1px #10b981' }
            : { background: '#d1d5db', boxShadow: '0 0 0 1px #ef4444' };

      return (
            <label className="inline-flex items-center cursor-pointer">
                  {admin ? (
                        <label className="inline-flex items-center cursor-pointer">
                              <input
                                    type="checkbox"
                                    value="1"
                                    className="sr-only peer"
                                    checked={busy}
                                    onChange={toggleBusyStatus}
                              />
                              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />

                        </label>
                  ) : (
                        <span className=" text-white text-sm font-medium">
                              <div className="message loading content-center justify-center items-center">
                                    <Lottie className='size-12' animationData={busy ? Active : NonActive} loop={true} />
                                    <div>{busy ? 'Busy' : 'Not Busy'}</div>
                              </div>
                        </span>)}


            </label>
      );
};

export default BusySwitch;
