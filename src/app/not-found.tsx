import React from "react";
import "animate.css";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
      <div className="animate__animated animate__fadeIn animate__delay-1s">
        <h1 className="text-6xl font-bold text-gray-800 mb-4 animate__animated animate__zoomIn animate__delay-2s">
          404
        </h1>
        <p className="text-xl text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-3s">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-blue-500 animate-ping"></div>
        </div>
        <div className="mt-6">
          <Link href="/"className="inline-block px-6 py-2 text-white bg-blue-500 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-blue-600">
            Go back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;