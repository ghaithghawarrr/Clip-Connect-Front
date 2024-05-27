import React from 'react';

export default function InputTextArea({ label, placeHolder, message, onChange, value }) {
      const style = "block mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300";

      return (
            <div>
                  <label htmlFor={label.toLowerCase()} className="block text-sm text-gray-500 dark:text-gray-300">
                        {label}
                  </label>

                  <textarea
                        id={label.toLowerCase()}
                        placeholder={placeHolder}
                        className={style}
                        name={label.toLowerCase()}
                        onChange={onChange}
                        value={value}
                  ></textarea>

                  <p className="mt-3 text-xs text-gray-400 dark:text-gray-600">
                        {message}
                  </p>
            </div>
      );
}