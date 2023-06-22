import React from 'react';
import './loading.css';

function Loading() {
  return (
    <div className="loading">
      <div className="loading-spinner"></div>
      <div className="loading-message">Laster...</div>
    </div>
  );
}

export default Loading;
