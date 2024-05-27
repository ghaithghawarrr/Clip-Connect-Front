import React from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from './avatar';

export default function BarberTile({ barber, userId }) {
      const navigate = useNavigate();
      const admin = false;
      const handleClick = () => {
            navigate("/barber", { state: { barber, admin, userId } });
            console.log('Barber tile clicked!');
      };

      return (
            <div
                  onClick={handleClick}
                  className="barber-tile cursor-pointer p-2 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
                  <div className="flex items-center">

                        <Avatar imageUrl={barber.user.avatarUrl} size="size-10" />
                        <div className="barber-details flex-1 ml-4">
                              <div className="flex justify-between items-center">
                                    <div className="flex flex-col">
                                          <h2 className="font-medium text-md text-black">{barber.shopName}</h2>

                                    </div>
                              </div>
                              <div className="flex items-center text-sm text-gray-700">
                                    <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-5 w-5 text-yellow-400 mr-1"
                                          viewBox="0 0 20 20"
                                          fill="currentColor"
                                    >
                                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <p className="font-normal">{barber.rating || 'N/A'}</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
