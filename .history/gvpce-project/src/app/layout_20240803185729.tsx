// app/layout.tsx
import { useEffect, useState } from 'react';
import SplashScreen from '../components/SplashScreen';
import './globals.css';

export default function RootLayout({ children }) {
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
      <body>{children}</body>
    </html>
  );
}
