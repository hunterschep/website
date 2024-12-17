import React from 'react';
import About from './About';
import '../stylesheets/Home.css'; // Import CSS file for animations

const Home = () => {
    const stars = Array.from({ length: 200 }); // Generate 200 stars

    return (
        <div className="bg-black h-screen w-full relative overflow-hidden flex items-center justify-center box-border">
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

            {/* About Section */}
            <div className="w-4/5 max-w-screen-md px-4 z-10">
                <About />
            </div>
        </div>


    );
};

export default Home;
