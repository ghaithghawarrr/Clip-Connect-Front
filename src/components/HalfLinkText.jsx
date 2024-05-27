import React from 'react';
import { Link } from 'react-router-dom';

function HalfLinkText({ nonlinktext, to, linktext }) {
  return (
    <p className='text-sm font-medium text-gray-900 dark:text-gray-300'>
      {nonlinktext}
      <Link to={to} className="text-blue-500 hover:underline">
        {linktext}
      </Link>
    </p>
  );
}

export default HalfLinkText;
