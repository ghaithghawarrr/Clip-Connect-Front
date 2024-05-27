import React from 'react';

const ButtonAddons = ({ btntype, btnname, onClick, disabled, label, nptname, npttype, value, onChange }) => {
      return (
            <div>
                  <div className="flex items-center justify-between">
                        <label htmlFor="email" className="block text-sm text-gray-500 dark:text-gray-300">
                              {label}
                        </label>

                  </div>
                  <div className="space-x-4 relative flex items-center mt-2">
                        <input
                              name={nptname}
                              type={npttype}
                              value={value}
                              onChange={onChange}
                              className="px-4 py-2.5 border border-gray-200 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 block w-full placeholder-gray-400/70 dark:placeholder-gray-500  rounded-lg text-gray-700  focus:outline-none focus:ring focus:ring-opacity-40 dark:bg-gray-900 dark:text-gray-300"
                        />
                        <button
                              className=" absolute inset-y-0 right-0 flex items-center px-4 text-sm font-medium text-white bg-slate-950 rounded-r-lg hover:bg-slate-900 focus:outline-none focus:bg-slate-700"
                              id="button-addon2"
                              type={btntype}
                              onClick={btntype === 'button' ? onClick : null}
                              disabled={disabled}
                        >
                              {btnname}
                        </button>
                  </div>
            </div>

      );
};

export default ButtonAddons;
