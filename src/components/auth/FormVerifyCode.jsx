import React, { useState } from 'react';
import axios from 'axios';
import TextField from './TextField';
import Button from '../multispot/Button';
import HalfLinkText from './HalfLinkText';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import Spacer from '../multispot/Spacer';
import ButtonAddons from '../multispot/ButtonAddons';

export default function VerifyCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState({ code: "" });
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
          navigate("/resetpassword", { state: { email: location.state.email, verificationCode: state.code } });
        }
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error occurred during signup:', error);
    }
  }

  const handleResend = async () => {
    setResendDisabled(true);
    try {
      const queryParams = {
        email: location.state.email
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
    <div className="d-flex vh-100 align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
      <form className="xform" onSubmit={handleSubmit} style={{ width: "280px" }}>
        <h3 className="mb-3 pb-3 xtitle">Verification</h3>
        <ButtonAddons label="Code" nptname="code" npttype="text" onChange={handleChange} value={state.code} btnname={resendDisabled == true ? resendCounter : "Resend"} btntype="button" onClick={handleResend} disabled={resendDisabled} />
        <Spacer height="1rem" />
        <Button name="Verify" type="submit" />
      </form>
    </div>
  );
}
