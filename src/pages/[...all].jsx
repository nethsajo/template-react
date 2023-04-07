import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-3">
      <h1 className="mb-2 text-8xl font-extrabold leading-tight text-gray-200 md:text-[16rem]">
        404
      </h1>
      <div className="mb-8 text-center max-xs:mb-4">
        <p className="mb-8 text-2xl font-semibold text-gray-700 md:text-5xl max-xs:mb-4 max-xs:text-base">
          We couldn't connect the dots.
        </p>
        <p className="mx-auto max-w-xl text-slate-600 sm:text-lg md:max-w-2xl md:text-xl max-xs:text-xs">
          This page was not found. You may have mistyped the address, or the page may not exist or
          may have been moved.
        </p>
      </div>
      <Link to="/" className="link-underlined font-semibold text-blue-500 hover:text-blue-600">
        Take me to the home page
      </Link>
    </div>
  );
};

export default NotFoundPage;
