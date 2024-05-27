import React, { useState } from 'react';
import ChatBox from './chatBox';
import BarberList from './barberList';

export default function TabCard({ userId }) {
      const [activeTab, setActiveTab] = useState(1);

      return (
            <div className="max-w-md  bg-zinc-900 shadow-md rounded-2xl overflow-hidden" style={{ height: "500px" }}>
               
                  <div className="flex ">
                        <button
                              onClick={() => setActiveTab(1)}
                              className={`text-white py-4 px-6 block focus:outline-none ${activeTab === 1 ? 'border-b-2 border-white font-semibold' : ''}`}
                              style={{ width: "50%" }}
                        >
                              Recommanded
                        </button>
                        <button
                              onClick={() => setActiveTab(2)}
                              className={`text-white py-4 px-6 block focus:outline-none ${activeTab === 2 ? 'border-b-2 border-white font-semibold' : ''}`}
                              style={{ width: "50%" }}
                        >
                              Chatbot
                        </button>
                  </div>
                 
                  <div className="p-4">
                        {activeTab === 1 && (

                              <BarberList userId={userId} />

                        )}
                        {activeTab === 2 && (
                              <div style={{ height: "400px" }}>

                                    <ChatBox />

                              </div>
                        )}
                  </div>
            </div >
      );
}

