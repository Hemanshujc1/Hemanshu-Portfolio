// src/pages/NotFound/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center max-h-[90vh] bg-black-900 text-white px-6 text-center mt-24 py-20">
      <h1 className="text-7xl font-extrabold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
