import React, { useState, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, InputText, CheckBox, HalfLinkText } from './import.js'
import { SideImage1, SideImage2, SideImage3, SideImage4, Loading } from './assets.js'
import Lottie from 'lottie-react';
import axios from 'axios';

function Login() {
      const navigate = useNavigate();
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState("");
      const initialState = {
            email: "",
            password: "",
      }
      const [isChecked, setIsChecked] = useState(false)
      const reducer = (state, action) => {
            if (action.type === "input") {
                  return { ...state, [action.field]: action.value };
            }
            return state;
      }

      const [state, dispatch] = useReducer(reducer, initialState);
      const [imageIndex, setImageIndex] = useState(0);
      const images = [
            SideImage2,
            SideImage3,
            SideImage4,
            SideImage1
      ];

      useEffect(() => {
            const intervalId = setInterval(() => {
                  setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 10000);

            return () => clearInterval(intervalId);
      }, []);

      const handleChange = (e) => {
            dispatch({
                  type: "input",
                  field: e.target.name,
                  value: e.target.value
            })
      }

      const handleSubmit = async (e) => {
            setIsLoading(true);
            e.preventDefault();

            try {
                  const queryParams = {
                        role: 'client'
                  };
                  const queryBody = {
                        email: state.email,
                        password: state.password
                  };

                  const response = await axios.post(
                        'http://localhost:8080/api/users/login',
                        queryBody,
                        { params: queryParams }
                  );
                  console.log(response)
                  if (response.data.status === "success") {
                        if (response.data.data.user.verified === 0) {
                              navigate("/verification", { state: { type: 0, email: response.data.data.user.email } });
                        } else if (response.data.data.user.role === "CLIENT") {
                              navigate("/home", { state: { client: response.data.data } });
                        } else if (response.data.data.user.role === "BARBER") {
                              if (response.data.data.isSet === false) {
                                    navigate("/barber-setup", { state: { barber: response.data.data } });
                              } else {
                                    navigate("/barber", { state: { barber: response.data.data, admin: true } });
                              }
                        }
                  } else {
                        setError(response.data.message);
                  }
            } catch (error) {
                  console.error('Error occurred during login:', error);
                  setError('An error occurred. Please try again.');
            } finally {
                  setIsLoading(false);
            }
      }

      return (
            <div className="content-center h-screen">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="col-span-2 flex justify-center items-center">

                              {isLoading ? (
                                    <div className="mx-auto">
                                          <div className="message loading"><Lottie animationData={Loading} loop={true} style={{ height: '100px' }} /></div>
                                    </div>
                              ) : (
                                    <form className="mx-auto" onSubmit={handleSubmit} style={{ width: "280px" }}>
                                          <p className="mb-3 pb-3 text-2xl font-bold">Log in</p>
                                          {error && (
                                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                                      {error}
                                                </div>
                                          )}
                                          <InputText
                                                type="email"
                                                error={false}
                                                disable={false}
                                                label="Email"
                                                placeHolder="you@gmail.com"
                                                onChange={handleChange}
                                                value={state.email}
                                          />
                                          <div style={{ height: "10px" }}></div>
                                          <InputText
                                                link="Forget Password?"
                                                to="/forget-password"
                                                secure={true}
                                                error={false}
                                                disable={false}
                                                label="Password"
                                                placeHolder="it's secret"
                                                onChange={handleChange}
                                                value={state.password}
                                          />
                                          <div style={{ height: "20px" }}></div>
                                          <Button buttonText="Login" type="submit" />
                                          <div style={{ height: "10px" }}></div>
                                          <CheckBox
                                                label="Remember me?"
                                                checked={isChecked}
                                                onChange={(e) => setIsChecked(e.target.checked)}
                                          />
                                          <div style={{ height: "20px" }}></div>
                                          <HalfLinkText nonlinktext="Don't have an account? " linktext="Register here" to="/signup" />
                                    </form>)}
                        </div>
                        <div className="hidden md:block">
                              <img
                                    src={images[imageIndex]}
                                    alt="Login image"
                                    className="w-full h-screen object-cover"
                              />
                        </div>
                  </div>

            </div>
      );
}

export default Login;
