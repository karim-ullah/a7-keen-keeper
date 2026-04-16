import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="text-center space-y-6">
        
        {/* 404 Number */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-primary">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-md mx-auto">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link to="/">
          <button className="btn btn-primary px-6">
            Go Back Home
          </button>
        </Link>

        {/* Optional Illustration */}
        <div className="mt-8">
          <img
            src="https://illustrations.popsy.co/gray/web-error.svg"
            alt="404 illustration"
            className="w-72 mx-auto opacity-80"
          />
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;