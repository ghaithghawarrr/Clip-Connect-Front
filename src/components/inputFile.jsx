import React from 'react';

export default function InputFile({ label, onFileChange }) {
      const handleFileChange = (e) => {
            const file = e.target.files[0];
            onFileChange(file);
      };
      return (
            <div>
                  <label htmlFor={label.toLowerCase()} className="block text-sm text-gray-500 dark:text-gray-300">
                        {label}
                  </label>
                  <input
                        type="file"
                        id={label.toLowerCase()}
                        onChange={handleFileChange}
                        className="block w-full  text-sm text-gray-600 bg-white border border-gray-200 rounded-lg file:bg-gray-200 file:text-gray-700 file:text-sm file:px-4 file:py-1 file:border-none file:rounded-full dark:file:bg-gray-800 dark:file:text-gray-200 dark:text-gray-300 placeholder-gray-400/70 dark:placeholder-gray-500 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:focus:border-blue-300"
                  />
            </div>
      );
}

