import React from 'react';
import '/src/hoverAnimations.css';
import SpinningModel from './SpinningModel';
import BackgroundSVG from './background.svg?react';

const Landing = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative bg-background-dark text-soft-white">
      {/* Full-screen SVG background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <BackgroundSVG className="w-full h-full wire-path pointer-events-none" preserveAspectRatio="xMidYMid slice" />
      </div>

      {/* Foreground Content */}
      <div className="flex flex-col items-center justify-center z-10 space-y-8 min-h-screen text-container">
        <header className="text-center space-y-4 p-8">
          <h1 className="text-6xl font-bold text-soft-white">Hi, I'm Lucas</h1>
          <p className="text-xl max-w-xl mx-auto text-soft-white">
            A creative and passionate full-stack software engineer with a focus on front-end UI.
            I’ve always been drawn to solving complex problems and troubleshooting.
          </p>
        </header>

        {/* Monitor Container */}
        <div className="relative flex flex-col items-center monitor-container">
          {/* Outer Bezel of the Monitor */}
          <div className="monitor-frame rounded-lg shadow-lg p-6 border-8 border-midnight-blue">
            {/* Inner Screen Bezel */}
            <div className="monitor-screen rounded-md border-4 border-gray-700 shadow-inner">
              {/* Screen Content (3D Model) */}
              <div className="screen-content p-4 bg-background-dark rounded-md">
                <SpinningModel />
              </div>
            </div>
          </div>

          {/* Monitor Base/Stand */}
          <div className="monitor-stand mt-4 flex flex-col items-center">
            {/* Stand Neck */}
            <div className="bg-midnight-blue w-6 h-16 rounded-t-lg shadow-lg"></div>
            {/* Stand Base */}
            <div className="bg-midnight-blue w-24 h-6 rounded-b-lg shadow-lg mt-[-4px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

