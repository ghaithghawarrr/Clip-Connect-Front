import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SideImage2 } from './assets.js'
import { Button, InputText } from './import.js'
import axios from 'axios';


function ForgetPassword() {
      const navigate = useNavigate();
      const [error, setError] = useState("");

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
                        navigate("/verification", { state: { type: 1, email: state.email } });
                  } else {
                        setError(response.data.message);
                  }
            } catch (error) {
                  console.error('Error occurred during signup:', error);
            }
      }

      return (
            <div className="content-center h-screen">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="col-span-2 flex justify-center items-center">
                              <form className="mx-auto" onSubmit={handleSubmit} style={{ width: "280px" }}>
                                    <p className="mb-3 pb-3 text-2xl font-bold">Check Email</p>
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
                                          onChange={handleChange} value={state.email}
                                    />

                                    <div style={{ height: "20px" }}></div>
                                    <Button buttonText="Submit" type="submit" />
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

export default ForgetPassword;
