import React, { useReducer, useState } from 'react';
import { SideImage2, Loading } from './assets.js'
import { useNavigate } from 'react-router-dom';
import { Button, InputText, HalfLinkText, DropdownList } from './import.js'
import Lottie from 'lottie-react';
import axios from 'axios';

const options = [
      { id: 1, name: 'Client' },
      { id: 2, name: 'Barber' },
];

function Signup() {
      const [isLoading, setIsLoading] = useState(false);
      const [error, setError] = useState('');
      const navigate = useNavigate();
      const [selectedOption, setSelectedOption] = useState(options[0]);

      const handleOptionChange = (option) => {
            setSelectedOption(option);

      };

      const initialState = {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
            role: selectedOption.name,
      };

      const reducer = (state, action) => {
            if (action.type === 'input') {
                  return { ...state, [action.field]: action.value };
            }
            return state;
      };

      const [state, dispatch] = useReducer(reducer, initialState);

      const handleChange = (e) => {
            dispatch({
                  type: 'input',
                  field: e.target.name,
                  value: e.target.value,
            });

      };

      const handleSubmit = async (e) => {
            e.preventDefault();

            setIsLoading(true);
            setError('');

            try {
                  const queryParams = {
                        role: selectedOption.name.toUpperCase()
                  };
                  const queryBody = {
                        name: state.username,
                        email: state.email,
                        password: state.password,
                        role: selectedOption.name.toUpperCase(),
                  };
                  console.log(queryBody);
                  const response = await axios.post('http://localhost:8080/api/users/register', queryBody, { params: queryParams });

                  if (response.data.status === 'success') {
                        navigate('/verification', { state: { type: 0, email: response.data.data.email } });
                  } else {
                        setError(response.data.message);
                  }
            } catch (error) {
                  console.error('Error occurred during signup:', error);
                  setError('An error occurred during signup. Please try again later.');
            } finally {
                  setIsLoading(false);
            }
      };

      return (
            <div className="content-center h-screen">
                  <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="col-span-2 flex justify-center items-center">
                              {isLoading ? (
                                    <div className="mx-auto">
                                          <div className="message loading"><Lottie animationData={Loading} loop={true} style={{ height: '100px' }} /></div>
                                    </div>
                              ) : (
                                    <form className="mx-auto " onSubmit={handleSubmit} style={{ width: '280px' }}>
                                          <p className="mb-3 pb-3 text-2xl font-bold">Sign Up</p>
                                          {error && (
                                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                                                      {error}
                                                </div>
                                          )}
                                          <InputText
                                                label="Username"
                                                placeHolder="Ovuvuevuevue"
                                                onChange={handleChange}
                                                value={state.username}
                                          />
                                          <div style={{ height: '10px' }}></div>
                                          <InputText
                                                type="email"
                                                label="Email"
                                                placeHolder="you@gmail.com"
                                                onChange={handleChange}
                                                value={state.email}
                                          />
                                          <div style={{ height: '10px' }}></div>
                                          <InputText
                                                secure={true}
                                                label="Password"
                                                placeHolder="it's secret"
                                                onChange={handleChange}
                                                value={state.password}
                                          />
                                          <div style={{ height: '10px' }}></div>
                                          <DropdownList
                                                options={options}
                                                onChange={handleOptionChange}
                                                selectedOption={selectedOption}
                                                label="Role"
                                                name="dropdown"
                                          />
                                          <div style={{ height: '20px' }}></div>
                                          <Button buttonText="Sign Up" type="submit" />
                                          <div style={{ height: '20px' }}></div>
                                          <HalfLinkText nonlinktext="Already have an account? " linktext="Log in" to="/login" />
                                    </form>)}
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

export default Signup;
