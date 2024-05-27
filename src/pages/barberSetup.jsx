import { useNavigate, useLocation } from 'react-router-dom';
import React, { useReducer, useState } from 'react';
import { Button, InputText, InputTextArea, Avatar, InputFile } from './import.js'
import { SideImage2, MarkerBlue } from './assets.js'
import { Map, Marker } from "pigeon-maps";
import Lottie from "lottie-react";
import axios from 'axios';

const BarberSetup = () => {
      const location = useLocation();
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState('');
      const [latitude, setLatitude] = useState(35.7700534);
      const [longitude, setLongitude] = useState(10.8185592);
      const [avatarUrl, setAvatarUrl] = useState('');
      const navigate = useNavigate();

      const initialState = {
            shopname: '',
            phonenumber: '',
            bio: '',
      };

      const reducer = (state, action) => {
            if (action.type === 'input') {
                  return { ...state, [action.field]: action.value };
            }
            return state;
      };

      const [state, dispatch] = useReducer(reducer, initialState);

      const handleChange = (e) => {
            dispatch({
                  type: 'input',
                  field: e.target.name,
                  value: e.target.value,
            });
      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            setIsLoading(true);
            setError('');

            try {
                  const updates = {
                        shopName: state.shopName,
                        avatarUrl: avatarUrl,
                        phoneNumber: state.phoneNumber,
                        bio: state.bio,
                        location: {
                              latitude: latitude,
                              longitude: longitude,
                        }
                  };

                  const response = await axios.put(`http://localhost:8080/api/barbers/setup?id=${location.state.barber.id}`, updates);

                  if (response.data.status === 'success') {

                        navigate("/barber", { state: { barber: response.data.data, admin: true } });
                  } else {
                        setError(response.data.message);
                  }
            } catch (error) {
                  console.error('Error occurred during setup:', error);
                  setError('An error occurred during setup. Please try again later.');
            } finally {
                  setIsLoading(false);
            }
      };

      const handleLocateButtonClick = () => {
            if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(
                        (position) => {
                              setLatitude(position.coords.latitude);
                              setLongitude(position.coords.longitude);
                        },
                        (error) => {
                              console.error("Error getting user location:", error);
                        }
                  );
            } else {
                  console.error("Geolocation is not supported by this browser.");
            }
      };

      const handleAvatarChange = (file) => {

            const formData = new FormData();
            formData.append('file', file);

            axios.post('http://localhost:8080/api/uploads/image', formData)
                  .then(response => {
                        if (response.data.status === 'success') {
                              setAvatarUrl(response.data.url);
                        } else {
                              console.error('Error uploading avatar:', response.data.message);
                        }
                  })
                  .catch(error => {
                        console.error('Error uploading avatar:', error);
                  });
      };

      return (
            <div className="content-center h-screen">
                  <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center">
                        <form className="col-span-2 mx-auto" onSubmit={handleSubmit}>
                              <div className="mx-auto" style={{ width: '280px' }}>
                                    <p className="mb-3 pb-3 text-2xl text-center font-bold">Barber Setup</p>
                                    {error && (
                                          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                                {error}
                                          </div>
                                    )}
                              </div>
                              <div className="grid grid-cols-2 gap-2 mx-auto space-x-4">
                                    <div style={{ width: '280px' }}>
                                          <Avatar imageUrl={avatarUrl} />
                                          <InputFile label="Profile Picture" onFileChange={handleAvatarChange} />
                                          <InputText
                                                label="Shop Name"
                                                placeHolder="Valhalla"
                                                onChange={handleChange}
                                                value={state.shopName}
                                                name="shopName"
                                          />
                                          <div style={{ height: '10px' }}></div>
                                          <InputText
                                                label="Phone Number"
                                                placeHolder="+21614834999"
                                                onChange={handleChange}
                                                value={state.phoneNumber}
                                                name="phoneNumber"
                                          />
                                          <div style={{ height: '10px' }}></div>
                                          <InputTextArea
                                                label="Bio"
                                                placeHolder="Boogie Woogie"
                                                onChange={handleChange}
                                                value={state.bio}
                                                name="bio"
                                          />
                                    </div>
                                    <div className='content-center' style={{ width: '280px' }}>

                                          <div className="relative max-w-xl mx-auto mt-20">

                                                <Map height={280} width={280} defaultCenter={[latitude, longitude]} defaultZoom={17}>

                                                      <Marker
                                                            width={50}
                                                            anchor={[latitude, longitude]}
                                                      >
                                                            <Lottie animationData={MarkerBlue} loop autoplay style={{ width: 50, height: 50 }} />
                                                      </Marker>
                                                </Map>

                                                <div className="absolute left-0 top-0 flex items-center justify-center">
                                                      <div className="p-2">
                                                            <button type="button" onClick={handleLocateButtonClick} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-sm p-3 text-center">
                                                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                                                  </svg>
                                                            </button>
                                                      </div>
                                                </div>
                                          </div>
                                          <div style={{ height: '10px' }}></div>
                                          <InputText
                                                label="Latitude"
                                                placeHolder="Latitude"
                                                onChange={(e) => setLatitude(parseFloat(e.target.value))}
                                                value={latitude}
                                                name="latitude"
                                          />
                                          <div style={{ height: '10px' }}></div>
                                          <InputText
                                                label="Longitude"
                                                placeHolder="Longitude"
                                                onChange={(e) => setLongitude(parseFloat(e.target.value))}
                                                value={longitude}
                                                name="longitude"
                                          />
                                    </div>
                              </div>
                              <div className="mx-auto mt-4" style={{ width: '280px' }}>
                                    <Button buttonText="Setup" type="submit" isLoading={isLoading} />
                              </div>
                        </form>
                        <div className="hidden md:block">
                              <img
                                    src={SideImage2}
                                    alt="Setup image"
                                    className="w-full h-screen object-cover"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default BarberSetup;
