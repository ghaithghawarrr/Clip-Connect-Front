import React, { useState } from 'react';
import { SideImage2 } from './assets.js'
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, ButtonAddons } from './import.js'
import axios from 'axios';

function Verification() {
      const navigate = useNavigate();
      const location = useLocation();
      const [state, setState] = useState({ code: "" });
      const [error, setError] = useState("");
      const [resendDisabled, setResendDisabled] = useState(false);
      const [resendCounter, setResendCounter] = useState(30);

      const handleChange = (e) => {
            setState({ ...state, [e.target.name]: e.target.value });
      }

      const handleSubmit = async (e) => {
            e.preventDefault();
            try {
                  const queryParams = {
                        email: location.state.email,
                        verificationCode: state.code
                  };
                  const response = await axios.post(
                        'http://localhost:8080/api/users/verify',
                        null,
                        { params: queryParams }
                  );
                  if (response.data.status === "success") {
                        if (location.state.type === 0) {
                              navigate("/login");
                        } else if (location.state.type === 1) {
                              navigate("/reset-password", { state: { email: location.state.email, verificationCode: state.code } });
                        }
                  } else {
                        setError(response.data.message);
                  }
            } catch (error) {
                  console.error('Error occurred during signup:', error);
            }
      }

      const handleResend = async () => {
            setResendDisabled(true);
            try {
                  const queryParams = {
                        email: location.state.email,
                        type: location.state.type
                  };
                  const response = await axios.post(
                        'http://localhost:8080/api/users/resend-verification-code',
                        null,
                        { params: queryParams }
                  );
                  if (response.data.status === "success") {
                        // Reset the countdown timer
                        setResendCounter(30);
                        // Start the countdown
                        const intervalId = setInterval(() => {
                              setResendCounter(prevCounter => {
                                    if (prevCounter === 1) {
                                          clearInterval(intervalId);
                                          setResendDisabled(false);
                                    }
                                    console.log(prevCounter);
                                    return prevCounter - 1;
                              });
                        }, 1000);
                  } else {
                        console.error(response.data.message);
                  }
            } catch (error) {
                  console.error('Error occurred during resend code:', error);
            }
      }

      return (
            <div className="content-center h-screen">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="col-span-2 flex justify-center items-center">
                              <form className="mx-auto" onSubmit={handleSubmit} style={{ width: "280px" }}>
                                    <p className="mb-3 pb-3 text-2xl font-bold">Verification</p>
                                    {error && (
                                          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                                {error}
                                          </div>
                                    )}
                                    <ButtonAddons label="Code" nptname="code" npttype="text" onChange={handleChange} value={state.code} btnname={resendDisabled ? resendCounter : "Resend"} btntype="button" onClick={handleResend} disabled={resendDisabled} />
                                    <div style={{ height: "20px" }}></div>
                                    <Button buttonText="Verify" type="submit" />
                              </form>
                        </div>
                        <div className="hidden md:block">
                              <img
                                    src={SideImage2}
                                    alt="Login image"
                                    className="w-full h-screen object-cover"
                              />
                        </div>
                  </div>
            </div>
      );
}

export default Verification;
