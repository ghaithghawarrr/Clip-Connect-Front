import React from 'react';

const Support = () => {
      return (
            <div className="min-h-screen flex items-center justify-center  p-10">
                  <div className="w-full max-w-md p-8 text-white bg-zinc-900 border border-zinc-900 shadow-lg rounded-2xl">
                        <h1 className="jacquard text-amber-500 text-3xl font-bold mb-4">Support</h1>
                        <p className="text-white mb-8">
                              At 1P2B, we are committed to providing exceptional support to our users. If you have any questions, concerns, or feedback, please don't hesitate to reach out to us. Our dedicated support team is here to assist you every step of the way.
                        </p>
                        <div className="flex items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a8 8 0 0 0-8 8c0 1.301.349 2.532.957 3.615L2.293 17.707a1 1 0 0 0 1.414 1.414l3.092-3.092A7.95 7.95 0 0 0 10 18a8 8 0 0 0 8-8c0-4.418-3.582-8-8-8zm-1 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                              </svg>
                              <span className="text-white">Email : support@1P2B.com</span>
                        </div>
                        <div className="flex items-center mt-4">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-white" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM5.293 6.707a1 1 0 0 1 1.414-1.414L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 1 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L8.586 10 5.293 6.707z" clipRule="evenodd" />
                              </svg>
                              <span className="text-white">Phone : +123-456-7890</span>
                        </div>
                  </div>
            </div>
      );
}

export default Support;
