import React from 'react';
import '../stylesheets/Background.css'; // Import CSS file for animations

const Background = () => {
  const stars = Array.from({ length: 200 }); // Generate 200 stars

  return (
    <div className="absolute inset-0 bg-black overflow-hidden flex items-center justify-center box-border z-0">
      {/* Twinkling Stars */}
      {stars.map((_, index) => {
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;
        const animationDelay = Math.random() * 5;
        const randomSize = Math.floor(Math.random() * 3.5) + 0.5;

        return (
          <div
            key={index}
            className="absolute bg-white rounded-full opacity-0 animate-flicker"
            style={{
              top: `${randomY}vh`,
              left: `${randomX}vw`,
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
