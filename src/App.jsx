import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [rotation, setRotation] = useState(0);

  const handleSpin = () => {
    const newRotation = rotation + Math.floor(Math.random() * 360 + 360);
    setRotation(newRotation);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500 p-6">
      <div className="relative">
        <div className="spinner-container m-auto">
          <ul
            className="spin-circle list-none p-0 m-0 w-80 h-80 bg-white rounded-full shadow-xl flex items-center justify-center"
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: 'transform 3s ease-out',
            }}
          >
            <li className="text-2xl text-gray-800">
              <div className="text">🍋</div>
            </li>
            <li className="text-2xl text-gray-800">
              <div className="text">🍎</div>
            </li>
            <li className="text-2xl text-gray-800">
              <div className="text">🍒</div>
            </li>
            <li className="text-2xl text-gray-800">
              <div className="text">🥝</div>
            </li>
            <li className="text-2xl text-gray-800">
              <div className="text">🍉</div>
            </li>
            <li className="text-2xl text-gray-800">
              <div className="text">🍍</div>
            </li>
            <li className="text-2xl text-gray-800">
              <div className="text">🍓</div>
            </li>
            <li className="text-2xl text-gray-800">
              <div className="text">🍑</div>
            </li>
            <li className="text-2xl text-gray-800">
              <div className="text">🍈</div>
            </li>
            <li className="text-2xl text-gray-800">
              <div className="text">🍊</div>
            </li>
            <li className="text-2xl text-gray-800">
              <div className="text">🍍</div>
            </li>
            <li className="text-2xl text-gray-800">
              <div className="text">🍏</div>
            </li>
          </ul>
          <div className="arrow"></div>
        </div>
      </div>
      <button
        className="mt-6 px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white text-2xl font-semibold rounded-full shadow-md hover:shadow-xl transition"
        onClick={handleSpin}
      >
        Spin
      </button>
    </div>
  );
};

export default App;
