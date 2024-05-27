import React, { useState } from 'react';

export default function Navbar({ dynamicPart, menuItems, title }) {
      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => {
            setIsOpen(!isOpen);
      };

      return (
            <div className=''>
                  <nav className={`content-center h-20 bg-zinc-900  shadow-lg  0 dark:shadow-none z-50`}>
                        <div className="container px-6 py-4 mx-auto">
                              <div className="lg:flex lg:items-center">
                                    <div className="flex items-center justify-between">
                                          <a href="#">
                                                <h1 className="text-lg text-white font-bold items-center justify-center">
                                                      {title}
                                                </h1>
                                          </a>


                                          <div className="flex lg:hidden">
                                                <button
                                                      onClick={toggleMenu}
                                                      type="button"
                                                      className="text-white dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                                      aria-label="toggle menu"
                                                >
                                                      {!isOpen ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                                            </svg>
                                                      ) : (
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                      )}
                                                </button>
                                          </div>
                                    </div>

                                    <div className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${isOpen ? 'block translate-x-0 opacity-100' : 'hidden opacity-0 -translate-x-full'}`}>

                                          {menuItems && menuItems.length > 0 && (
                                                <div className="flex flex-col text-white capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                                                      {menuItems.map((item, index) => (
                                                            <a key={index} href={item.link} className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-blue-600 dark:hover:text-gray-200">
                                                                  {item.label}
                                                            </a>
                                                      ))}
                                                </div>
                                          )}
                                    </div>
                                    {dynamicPart}
                              </div>
                        </div>
                  </nav>
            </div>
      );
}











{/* <nav className="bg-gray-950 shadow dark:bg-gray-800 rubik">
      <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex lg:items-center">
                  <div className="flex items-center justify-between">
                        <a href="#">
                              <h1 className="text-lg text-white font-bold items-center justify-center">
                                    {title}
                              </h1>
                        </a>

                      
                        <div className="flex lg:hidden">
                              <button
                                    onClick={toggleMenu}
                                    type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                              >
                                    {!isOpen ? (
                                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                          </svg>
                                    ) : (
                                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                          </svg>
                                    )}
                              </button>
                        </div>
                  </div>

                  <div className={`absolute inset-x-0 z-20 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between ${isOpen ? 'block translate-x-0 opacity-100' : 'hidden opacity-0 -translate-x-full'}`}>
                        
                        {menuItems && menuItems.length > 0 && (
                              <div className="flex flex-col text-slate-300 capitalize dark:text-gray-300 lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
                                    {menuItems.map((item, index) => (
                                          <a key={index} href={item.link} className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-violet-700 dark:hover:text-gray-200">
                                                {item.label}
                                          </a>
                                    ))}
                              </div>
                        )}
                  </div>
                  {dynamicPart}
            </div>
      </div>
</nav> */}