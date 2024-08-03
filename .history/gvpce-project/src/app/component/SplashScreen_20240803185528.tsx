// components/SplashScreen.tsx
import React, { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, 50); // Adjust this value to speed up or slow down the loading

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <h1 className="text-5xl font-bold mb-4">GVPCE</h1>
      <div className="w-full h-2 bg-gray-300">
        <div className="h-2 bg-blue-600" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default SplashScreen;
