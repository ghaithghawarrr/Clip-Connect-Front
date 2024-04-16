import React, { useReducer, useState } from 'react';
import axios from 'axios';
import TextField from '../TextField';
import Button from '../../multispot/Button';
import HalfLinkText from '../HalfLinkText';
import { useNavigate, Link } from 'react-router-dom';
import Spacer from '../../multispot/Spacer';
import Loading from '../../multispot/Loading';
export default function FormSignup() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const initialState = {
    email: "",
    password: "",
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
        email: state.email,
        password: state.password
      };
      console.log(queryBody);
      const response = await axios.post(
        'http://localhost:8080/api/users/login',
        queryBody,
        { params: queryParams }
      );

      if (response.data.status == "success") {
        if (response.data.data.verified == 0) {
          navigate("/verifycode", { state: { type: 0, email: response.data.data.email } });
        } else {
          navigate("/exploire");
        }
      } else {
        setError(response.data.message);
      }
      navigate("/explore", { state: { userid: response.data.data.id } });
    } catch (error) {
      console.error('Error occurred during signup:', error);
    }
  }

  return (
    <div className="d-flex vh-100 align-items-center h-custom-2 px-5 ms-xl-4 pt-5 pt-xl-0 mt-xl-n5">
      <form className="xform" onSubmit={handleSubmit} style={{ width: "280px" }}>
        <h3 className="mb-3 pb-3 xtitle">Log in</h3>
        {error && <div className="alert alert-danger" role="alert">
          {error}
        </div>}
        <TextField label="Email" name="email" type="email" onChange={handleChange} value={state.email} />
        <TextField label="Password" name="password" type="password" onChange={handleChange} value={state.password} />
        <p className="small pb-lg-2 text-end" ><Link className="text-muted" to="/checkemail">Forgot password?</Link></p>

        {isLoading ? (
          <Loading />
        ) : (
          <Button name="Log in" type="submit" />
        )}
        {/* <Button name="Log in" type="submit" /> */}
        <Spacer height="20px" />
        <HalfLinkText nonlinktext="Don't have an account? " linktext="Register here" to="/signup" />
      </form>
    </div>
  );
}