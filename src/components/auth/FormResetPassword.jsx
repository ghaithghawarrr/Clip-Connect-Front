import React, { useReducer } from 'react';
import axios from 'axios';
import TextField from './TextField';
import Button from '../multispot/Button';
import HalfLinkText from './HalfLinkText';
import { useNavigate, useLocation } from 'react-router-dom';
import Spacer from '../multispot/Spacer';

export default function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialState = {
    newPassword: "",
    confirmNewPassword: ""
  }

  const reducer = (state, action) => {
    if (action.type === "input") {
      return { ...state, [action.field]: action.value };
    }
    return state;
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "input",
      field: e.target.name,
      value: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const queryParams = {
        email: location.state.email,
        verificationCode: location.state.verificationCode,
        newPassword: state.newPassword,
      };
      console.log(queryParams)
      const response = await axios.post(
        'http://localhost:8080/api/users/reset-password',
        null,
        { params: queryParams }
      );

      if (response.data.status == "success") {
        navigate("/login");
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.error('Error occurred during signup:', error);
    }
  }

  return (
    <div className="d-flex vh-100 align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
      <form className="xform" onSubmit={handleSubmit} style={{ width: "280px" }}>
        <h3 className="mb-3 pb-3 xtitle">Reset Password</h3>

        <TextField label="New Password" name="newPassword" type="password" onChange={handleChange} value={state.newPassword} />
        <TextField label="Confirm New Password" name="confirmNewPassword" type="password" onChange={handleChange} value={state.confirmNewPassword} />
        <Spacer height="1rem" />
        <Button name="Reset" type="submit" />
      </form>
    </div>
  );
}