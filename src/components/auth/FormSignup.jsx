import React, { useReducer, useState } from 'react';
import axios from 'axios';
import TextField from './TextField';
import Button from '../multispot/Button';
import Spacer from '../multispot/Spacer';
import HalfLinkText from './HalfLinkText';
import DropdownList from './DropdownList';
import { useNavigate } from 'react-router-dom';

export default function FormSignup() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "client"
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
    setIsLoading(true);
    e.preventDefault();

    try {
      const queryParams = {
        role: 'client'
      };
      const queryBody = {
        name: state.username,
        email: state.email,
        password: state.password
      };
      console.log(queryBody);
      const response = await axios.post(
        'http://localhost:8080/api/users/register',
        queryBody,
        { params: queryParams }
      );

      if (response.data.status == "success") {
        navigate("/verifycode", { state: { type: 0, email: response.data.data.email } });
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
        <h3 className="mb-3 pb-3 xtitle">Sign up</h3>
        <TextField label="Username" name="username" type="text" onChange={handleChange} value={state.username} />
        <TextField label="Email" name="email" type="email" onChange={handleChange} value={state.email} />
        <TextField label="Password" name="password" type="password" onChange={handleChange} value={state.password} />
        <TextField label="Confirm Password" name="confirmPassword" type="password" onChange={handleChange} value={state.confirmPassword} />
        <DropdownList label="Role" name="role" options={["Client", "Barber"]} selected={state.role} onChange={handleChange} />
        <Spacer height="1rem" />
        <Button name="Sign up" type="submit" />
        
        <Spacer height="20px" />
        <HalfLinkText nonlinktext="Already have an account? " linktext="Log in" to="/login" />
      </form>
    </div>
  );
}