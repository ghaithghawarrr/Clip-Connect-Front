import React from 'react';
import defo from '../assets/default/default-avatar-1.svg';
export default function Avatar({ imageUrl, name, email, showRing = false, showDot = false, size = "size-32" }) {
      const imageSource = imageUrl ? imageUrl : defo;

      return (
            <div className="flex items-center gap-x-2 place-content-center">
                  <div className="flex items-center gap-x-6">
                        <div className="relative">
                              <img
                                    className={`object-cover ${size} rounded-full  ${showRing ? 'ring ring-gray-300 dark:ring-gray-600' : ''}`}
                                    src={imageSource}
                                    alt=""
                              />

                              {showDot && <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-1 ring-white"></span>}
                        </div>
                  </div>
            </div>
      );
}
