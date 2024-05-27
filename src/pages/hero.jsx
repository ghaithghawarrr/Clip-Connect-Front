import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BackGround } from './assets.js'
import { Button, Navbar } from './import.js'

function Hero() {
      const navigate = useNavigate();
      const [isOpen, setIsOpen] = useState(false);
      const tickIcon = (<svg className="w-5 h-5 mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" > <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>);

      const handleLogin = () => {
            navigate("/login");
      };

      const handleSignUp = () => {
            navigate("/signup");
      };

      return (
            <header className="rubik bg-white dark:bg-gray-900 h-screen" style={{ backgroundImage: `url(${BackGround})`, backgroundSize: 'cover' }}>

                  <Navbar
                        title="ClipConnect"
                        menuItems={[
                              { label: 'Features', link: '/features' },
                              { label: 'Support', link: '/support' },
                              { label: 'About Us', link: '/about-us' },

                        ]}
                        dynamicPart={
                              <>
                                    <Button buttonText="Log In" type="submit" fullWidth={false} onClick={handleLogin} />
                                    <div style={{ width: "5px" }}></div>
                                    <Button buttonText="Sign Up" type="submit" fullWidth={false} onClick={handleSignUp} color="bg-white text-black hover:bg-gray-200 focus:ring-gray-200" />
                              </>
                        }

                  />
                  <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                        <div className="w-full lg:w-1/2">

                              <div className="relative  bg-black shadow-lg rounded-xl sm:p-5 bg-clip-padding bg-opacity-60 " style={{ backdropFilter: 'blur(20px)' }}>
                                    <div className="">
                                          <h1 className="text-base font-semibold tracking-wide text-white dark:text-white text-xl">Discover the premier barber service in your vicinity.</h1>
                                          <p className="mt-4 text-white dark:text-gray-300">We partner with top-rated barbers across Tunisia to assist you in locating the perfect grooming services.</p>
                                          <div className="grid gap-6 mt-8 sm:grid-cols-2">
                                                <div className="flex items-center text-white -px-3 dark:text-gray-200">
                                                      {tickIcon}
                                                      <span className="mx-3">Easy Booking</span>
                                                </div>
                                                <div className="flex items-center text-white -px-3 dark:text-gray-200">
                                                      {tickIcon}
                                                      <span className="mx-3">Reviews</span>
                                                </div>
                                                <div className="flex items-center text-white -px-3 dark:text-gray-200">
                                                      {tickIcon}
                                                      <span className="mx-3">Find Barbershops</span>
                                                </div>

                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </header>
      );
}

export default Hero;
