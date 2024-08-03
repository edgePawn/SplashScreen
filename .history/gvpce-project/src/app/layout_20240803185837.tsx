// app/layout.tsx
import React, { useEffect, useState, ReactNode } from 'react';
import SplashScreen from '../app/component/SplashScreen';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust this value to match the loading duration of the splash screen

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <html lang="en">
      <head />
        {/* Add any head elements here */}
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
