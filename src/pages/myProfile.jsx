import React, { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Button, Navbar, InputText, Avatar, InputFile, ReviewsList } from './import.js';
import axios from "axios";

export default function MyProfile() {
      const location = useLocation();
      const [client, setClient] = useState(location.state.client);
      const [userId, setUserId] = useState(location.state.client.user.id);
      const [user, setUser] = useState({
            email: client.user.email,
            name: client.user.name,
            avatarUrl: client.user.avatarUrl
      });
      const [message, setMessage] = useState('');

      useEffect(() => {
            const fetchClientById = async () => {
                  try {
                        const response = await axios.get(`http://localhost:8080/api/clients/${location.state.client.id}`);
                        setClient(response.data.data);
                        setUser({
                              email: response.data.data.user.email,
                              name: response.data.data.user.name,
                              avatarUrl: response.data.data.user.avatarUrl
                        })
                        console.log(response.data.data)
                  } catch (error) {
                        console.error('Error fetching client:', error);
                  }
            };

            fetchClientById();
      }, [location.state.client.id]);

      const handleChange = (e) => {
            const { name, value } = e.target;
            setUser({
                  ...user,
                  [name]: value
            });
      };

      const handleAvatarChange = async (file) => {
            if (!file) return;

            const formData = new FormData();
            formData.append("file", file);

            try {
                  const response = await axios.post("http://localhost:8080/api/uploads/image", formData, {
                        headers: {
                              "Content-Type": "multipart/form-data",
                        },
                  });
                  const fileUrl = response.data.url;
                  setUser({
                        ...user,
                        avatarUrl: fileUrl,
                  });
            } catch (error) {
                  console.error("Error uploading file:", error);
                  setMessage('Error uploading file');
            }
      };

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const response = await axios.put(`http://localhost:8080/api/users/update`, user, {
                        params: { userId: client.user.id }
                  });
                  console.log(response.data)
                  setMessage(response.data.message);
            } catch (error) {
                  console.error("Error updating user:", error);
                  setMessage('Error updating user');
            }
      };

      return (
            <div className="h-screen rubik">
                  <Navbar
                        title="ClipConnect"
                        menuItems={[
                              { label: 'Features', link: '/features' },
                              { label: 'Support', link: '/support' },
                              { label: 'About Us', link: '/about-us' },
                        ]}
                  />
                  <div className="grid grid-cols-2 gap-2">
                        <div className="container m-4">
                              <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
                                    <div className="flex flex-col top-0 z-10">
                                          <div className="bg-zinc-900 border border-zinc-900 shadow-lg rounded-2xl p-4">
                                                <div className="container mx-auto p-4">
                                                      <form onSubmit={handleSubmit} className="space-y-4">
                                                            <Avatar imageUrl={user.avatarUrl} />
                                                            <InputFile label="Profile Picture" onFileChange={handleAvatarChange} />
                                                            <InputText
                                                                  type="text"
                                                                  label="Name"
                                                                  value={user.name}
                                                                  onChange={handleChange}
                                                                  name="name"
                                                                  placeholder="Name"
                                                            />
                                                            <InputText
                                                                  type="email"
                                                                  label="Email"
                                                                  value={user.email}
                                                                  onChange={handleChange}
                                                                  name="email"
                                                                  placeholder="Email"
                                                            />
                                                            <div style={{ height: '5px' }}></div>
                                                            <Button buttonText="Save" type="submit" />
                                                      </form>
                                                      {message && <p className="mt-4">{message}</p>}
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                        <div className="container p-4 space-y-*">
                              <div className="max-w-3xl w-full mx-auto grid gap-4 grid-cols-1">
                                    <div className="flex flex-col top-0 z-10">
                                          <div className="bg-zinc-900 border border-zinc-900 shadow-lg rounded-2xl p-4">
                                                <ReviewsList userId={userId} />
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
