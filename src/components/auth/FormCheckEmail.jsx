import React, { useReducer } from 'react';
import axios from 'axios';
import TextField from './TextField';
import Button from '../multispot/Button';
import HalfLinkText from './HalfLinkText';
import { useNavigate, Link } from 'react-router-dom';
import Spacer from '../multispot/Spacer';

export default function FormCheckEmail() {
  const navigate = useNavigate();

  const initialState = {
    email: "",
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
        email: state.email
      };
      console.log(queryParams)
      const response = await axios.post(
        'http://localhost:8080/api/users/forgot-password',
        null,
        { params: queryParams }
      );

      if (response.data.status == "success") {
        navigate("/verifycode", { state: { type: 1, email: state.email } });
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
        <h3 className="mb-3 pb-3 xtitle">Check Email</h3>

        <TextField label="Email" name="email" type="email" onChange={handleChange} value={state.email} />
        <Spacer height="1rem" />
        <Button name="Submit" type="submit" />
      </form>
    </div>
  );
}