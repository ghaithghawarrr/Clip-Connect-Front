import React, { useState } from 'react';

const Rating = ({ interactive = true, initialValue = 0, onChange }) => {
      const [rating, setRating] = useState(initialValue);
      const [hoverRating, setHoverRating] = useState(0);

      const handleMouseEnter = (index) => {
            if (interactive) {
                  setHoverRating(index);
            }
      };

      const handleMouseLeave = () => {
            if (interactive) {
                  setHoverRating(0);
            }
      };

      const handleClick = (index) => {
            if (interactive) {
                  setRating(index);
                  onChange(index);
            }
      };

      return (
            <div className="max-w-2xl mx-auto">
                  <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((index) => (
                              <svg
                                    key={index}
                                    className={`w-5 h-5 ${(hoverRating || rating) >= index ? 'text-yellow-400' : 'text-gray-300'
                                          }`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick(index)}
                              >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                              </svg>
                        ))}
                  </div>


            </div>
      );
};

export default Rating;
