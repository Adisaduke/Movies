import React, { useEffect, useState } from 'react';
import './Loading.css'; // Create a CSS file for styling

const Loading = () => {
  const [showLoading, setShowLoading] = useState(true);

  // Simulate a delay before hiding the loading component
  useEffect(() => {
    const delay = setTimeout(() => {
      setShowLoading(false);
    }, 2000); // Adjust the delay time (in milliseconds) as needed

    return () => clearTimeout(delay);
  }, []);

  return (
    <div className={`loading ${showLoading ? 'show' : ''}`}>
      <div className="spinner"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Loading;
