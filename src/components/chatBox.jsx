import React, { useState } from 'react';
import axios from 'axios';
import Lottie from 'lottie-react';
import loading from '../assets/animation/texting.json';

function ChatBox() {
      const [messages, setMessages] = useState([]);
      const [userInput, setUserInput] = useState('');
      const [isLoading, setIsLoading] = useState(false);


      const sendMessage = async () => {
            if (userInput.trim() !== '') {
                  const newMessages = [...messages, { text: userInput, sender: 'user' }];
                  setMessages(newMessages);
                  setUserInput('');
                  setIsLoading(true);

                  const chatHistory = newMessages.map(msg => ({
                        role: msg.sender.toUpperCase(),
                        message: msg.text
                  }));

                  try {
                        console.log(chatHistory);
                        const response = await axios.post('http://localhost:8080/api/chat', {
                              userMessage: userInput,
                              chatHistory: chatHistory
                        }, {
                              headers: {
                                    'Content-Type': 'application/json',
                              },
                        });

                        if (response.data) {
                              setMessages([...newMessages, { text: response.data, sender: 'chatbot' }]);
                        }
                  } catch (error) {
                        console.error('Error sending message:', error);
                        setMessages([...newMessages, { text: 'Error communicating with chatbot', sender: 'chatbot' }]);
                  } finally {
                        setIsLoading(false);
                  }
            }
      };


      const handleKeyPress = (event) => {
            if (event.key === 'Enter') {
                  sendMessage();
            }
      };

      return (
            <div className="chat-container">

                  <div className="message-list">
                        {messages.map((message, index) => (
                              <div key={index} className={`message ${message.sender}`}>
                                    <p>{message.text}</p>
                              </div>
                        ))}
                        {isLoading && <div className="message loading"><Lottie animationData={loading} loop={true} style={{ height: '100px' }} /></div>}
                  </div>


                  <div className="input-container">
                        <input
                              type="text"
                              value={userInput}
                              onChange={(e) => setUserInput(e.target.value)}
                              onKeyPress={handleKeyPress}
                              placeholder="Type your message here"
                        />
                        <button onClick={sendMessage}>Send</button>
                  </div>
            </div>
      );
}

export default ChatBox;
