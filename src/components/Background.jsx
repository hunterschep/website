import React from 'react';
import '../stylesheets/Background.css'; // Import CSS file for animations

const Background = () => {
  const stars = Array.from({ length: 300 }); // Increased to 300 stars for better coverage

  return (
    <div className="fixed inset-0 w-screen h-screen bg-black overflow-hidden z-0">
      {/* Twinkling Stars */}
      {stars.map((_, index) => {
        // Using percentage for better distribution across different screen sizes
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const animationDelay = Math.random() * 5;
        const randomSize = Math.floor(Math.random() * 3.5) + 0.5;
        
        return (
          <div
            key={index}
            className="absolute bg-white rounded-full opacity-0 animate-flicker"
            style={{
              top: `${randomY}%`,
              left: `${randomX}%`,
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              animationDelay: `${animationDelay}s`,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Background;
