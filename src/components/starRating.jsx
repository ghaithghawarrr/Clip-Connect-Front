import React from "react";
import { StarIcon } from '@heroicons/react/24/solid';

export default function StarRating({ rating }) {
     
      const roundedRating = Math.max(0, Math.min(5, Math.round(rating * 2) / 2));
     
      const stars = Array.from({ length: 5 }, (_, index) => {
            const isFilled = index < roundedRating;
            return (
                  <StarIcon
                        key={index}
                        className={`w-6 h-6 bg-white ${isFilled ? 'fill-yellow-400' : 'fill-white-400 stroke-white'}`}
                  />
            );
      });

      return (
            <div className="flex items-center space-x-1">
                  {stars}
                  <span className="text-gray-500">{rating}</span>
            </div>
      );
};
