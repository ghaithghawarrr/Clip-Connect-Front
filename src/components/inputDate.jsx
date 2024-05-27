import React from 'react';

const InputDate = ({ label, value, onChange }) => {
      const style = "mt-2 block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300";

      return (
            <div>
                  <label htmlFor={label.toLowerCase()} className="block text-sm text-gray-500 dark:text-gray-300">
                        {label}
                  </label>
                  <input
                        type="date"
                        id={label.toLowerCase()}
                        className={style}
                        value={value}
                        onChange={onChange}
                  />
            </div>
      );
};

export default InputDate;
