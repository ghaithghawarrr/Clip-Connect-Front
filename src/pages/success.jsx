import React, { useReducer, useState } from 'react';
import { SideImage2 } from './assets.js'
import { useNavigate } from 'react-router-dom';
import { ButtonLink } from './import.js'
import axios from 'axios';

function Success() {
      const navigate = useNavigate();
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState("");
      const initialState = {
            email: "",
            password: "",
      }
      const [isChecked, setIsChecked] = useState(false);
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
            <div className="content-center h-screen">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="col-span-2 flex justify-center items-center">
                              <form className="xform">
                                    <div className="container mt-5">
                                          <p className="mb-3 pb-3 text-2xl font-bold">Password Reset Successful</p>
                                          <p>Your password has been successfully reset. You can now sign in using your new password.</p>
                                    </div>
                                    <ButtonLink name="Log In" link="/login" />
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

export default Success;
