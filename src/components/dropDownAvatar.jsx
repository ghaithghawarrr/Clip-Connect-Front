import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from './avatar';

export default function DropDownAvatar({ menuItems, client, imageUrl }) {
      const [isOpen, setIsOpen] = useState(false);
      const dropdownRef = useRef(null);
      const navigate = useNavigate();
      const toggleMenu = () => {
            setIsOpen(!isOpen);
      };

      const handleLinkClick = (event, link) => {
            event.preventDefault();
            navigate(link, { state: { client } });
      };

      useEffect(() => {
            const handleClickOutside = (event) => {
                  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                        setIsOpen(false);
                  }
            };

            document.addEventListener('mousedown', handleClickOutside);
            return () => {
                  document.removeEventListener('mousedown', handleClickOutside);
            };
      }, []);

      return (
            <div className="relative ml-3" ref={dropdownRef}>
                  <div>
                        <button
                              type="button"
                              onClick={toggleMenu}
                              className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                              id="user-menu-button"
                              aria-expanded={isOpen ? 'true' : 'false'}
                              aria-haspopup="true"
                        >
                              <span className="absolute -inset-1.5"></span>
                              <span className="sr-only">Open user menu</span>


                              <Avatar size="size-10" imageUrl={imageUrl} />
                        </button>
                  </div>

                  {isOpen && (
                        <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                              {menuItems.map((menuItem, index) => (
                                    <a
                                          key={index}

                                          className="block px-4 py-2 text-sm text-gray-700"
                                          role="menuitem"
                                          tabIndex="-1"
                                          onClick={(event) => handleLinkClick(event, menuItem.link)}
                                    >
                                          {menuItem.label}
                                    </a>
                              ))}
                        </div>
                  )}
            </div>
      );
}
