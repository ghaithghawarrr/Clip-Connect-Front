import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function InputText({ label, placeHolder, message, topLink, disable = false, prefixIcon, error = false, secure = false, type = "text", link, to, onChange, value }) {

      const eyeIcon = (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mx-4 text-gray-400 transition-colors duration-300 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400"><path d="M12 15a3 3 0 100-6 3 3 0 000 6z" /><path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" /></svg>);
      const [showValue, setShowValue] = useState(false);

      const toggleValueVisibility = () => {
            setShowValue(!showValue);
      };
      const styleBase = "block w-full placeholder-gray-400/70 dark:placeholder-gray-500 py-2.5 rounded-lg text-gray-700  focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-900 dark:text-gray-300";
      const styleIcon = `pl-11 rtl:pr-11  dark:bg-gray-900 dark:text-gray-300 ${secure === true ? "rtl:pl-11 pr-11" : "rtl:pl-5 pr-5"}`;
      const styleSecure = ` rtl:pl-11 pr-11  ${prefixIcon != null ? "rtl:pr-11 pl-11" : "rtl:pr-5 pl-5"}`;
      const styleDisabled = "bg-gray-50 cursor-not-allowed";
      const styleNoDisabled = "bg-white";
      const styleError = `border border-red-400 focus:border-red-400 focus:ring-red-300`;
      const styleNoError = `border border-gray-200 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300`;
      const style = `${styleBase} ${disable === true ? styleDisabled : styleNoDisabled} ${prefixIcon != null ? styleIcon : "px-5"} ${error === true ? styleError : styleNoError} ${secure === true ? styleSecure : "px-5"}`;

      return (
            <div>

                  <div className="flex items-center justify-between">
                        <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-300">
                              {label}
                        </label>
                        {link != null && (<Link to={to} className="text-xs text-gray-600 hover:underline dark:text-gray-400">
                              {link}
                        </Link>)}
                  </div>
                  <div className={`relative flex items-center mt-2`}>
                        {prefixIcon != null && (
                              <span className="absolute">
                                    {prefixIcon}
                              </span>)
                        }
                        {secure && (
                              <button className="absolute right-0 focus:outline-none rtl:left-0 rtl:right-auto" onClick={toggleValueVisibility} type="button">
                                    {eyeIcon}
                              </button>)
                        }

                        <input
                              type={secure == true ? (showValue ? 'text' : 'password') : type}
                              {...(disable === true ? { disabled: true } : null)}
                              id={label.toLowerCase().replace(/\s/g, '')}
                              placeholder={placeHolder}
                              className={style}
                              name={label.toLowerCase().replace(/\s/g, '')}
                              value={value}
                              onChange={onChange}
                        />
                  </div>
                  {message && (
                        <p className={`mt-3 text-xs  ${error === true ? "text-red-400" : "text-gray-400 dark:text-gray-600"} `}>
                              {message}
                        </p>
                  )}
            </div>
      );
}
