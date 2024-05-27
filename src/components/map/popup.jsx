import React, { useState } from "react";
import Button from "../button";
import { useNavigate, useLocation } from 'react-router-dom';
import Avatar from "../avatar";

export default function PopUp({ barber, userId }) {
      const navigate = useNavigate();
      const admin = false;
      const handleClick = () => {
            navigate("/barber", { state: { barber, admin, userId } });
            console.log('Barber tile clicked!');
      };
      return (
            <div className="h-full pt-0 text-center sm:block sm:p-0" style={{ position: "absolute", top: 0, left: 0, padding: 7, width: '400px' }}>


                  <div className="h-full flex flex-col items-center rounded-2xl w-96 mx-auto p-5 bg-zinc-900 bg-clip-border shadow-3xl shadow-shadow-500 dark:bg-navy-800 dark:text-white dark:shadow-none">
                        <div className=" flex h-32 w-full justify-center rounded-xl bg-cover">
                              <Avatar imageUrl={barber.user.avatarUrl} />
                        </div>

                        <div className="flex flex-col items-center mt-4">
                              <h4 className="text-xl font-bold text-white dark:text-white">{barber.shopName}</h4>
                              <h5 className="text-xl font-bold text-gray-500 dark:text-white">{barber.user.name}</h5>
                              <p className="text-base font-normal text-white">{barber.bio}</p>
                        </div>

                        <Button buttonText="See details" type="submit" fullWidth={false} onClick={handleClick} color="bg-white text-black hover:bg-gray-200 focus:ring-gray-200" />
                  </div>
            </div>
      );
};