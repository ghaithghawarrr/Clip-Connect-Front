import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { MyMap, Navbar, DropDownAvatar, TabCard } from './import.js'
import axios from "axios";

export default function Home() {
      const location = useLocation();
      const avatarItems = [
            { label: 'Your Profile', link: '/my-profile' },
            { label: 'Sign out', link: '/login' }
      ];
      const [client, setClient] = useState(location.state.client);
      useEffect(() => {
            const fetchClientById = async () => {
                  try {
                        const response = await axios.get(`http://localhost:8080/api/clients/${location.state.client.id}`);
                        setClient(response.data.data);

                        console.log(response.data.data)
                  } catch (error) {
                        console.error('Error fetching client:', error);
                  }
            };

            fetchClientById();
      }, [location.state.client.id]);
      return (
            <div className="h-screen rubik bg-white">
                  <Navbar
                        title="ClipConnect"
                        menuItems={[

                        ]}
                        dynamicPart={
                              <DropDownAvatar menuItems={avatarItems} client={client} imageUrl={client.user.avatarUrl} />
                        }
                  />

                  <div className="space-x-9 bg-stone-50 h-full items-start grid grid-flow-row-dense grid-cols-3 grid-rows-1 p-7">
                        <div className="col-span-2">
                              <div className="">
                                    <MyMap userId={client.user.id} />
                              </div>
                        </div>
                        <div className="col-span-1">
                              <div className="">
                                    <TabCard userId={client.user.id} />
                              </div>
                        </div>
                  </div>

            </div>
      );
}





