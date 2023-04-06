// src/components/ErrorPage.js
import React from 'react';

const ErrorPage = ({ message, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Error</h1>
        <p>{message}</p>
      </div>
      <button onClick={reset} className="btn mt-4">
        Back to Home
      </button>
    </div>
  );
};

export default ErrorPage;
