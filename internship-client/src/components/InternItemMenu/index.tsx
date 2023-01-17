import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

type typeSubmenu = {
  code: string;
  path: string;
  title: string;
};

type typeMenuItem = {
  code: string;
  title: string;
  subMenu: typeSubmenu[];
};

const InternItemMenu = ({ code, title, subMenu }: typeMenuItem) => {
  const [toggle, setToggle] = useState(true);

  return (
    <li>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <svg
          aria-hidden="true"
          className="flex-shrink-0 w-6 h-6 text-black transition duration-75 group-hover:text-gray-900"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
          />
        </svg>
        <span className="flex-1 ml-3 text-2xl text-gray-900 font-bold text-left whitespace-nowrap">
          {title}
        </span>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <ul id={`#${code}`} className={`${toggle && 'hidden'} py-2 space-y-2 mx-2`}>
        {subMenu.map((item: typeSubmenu) => {
          return (
            <NavLink
              key={item.code}
              className={({ isActive }) =>
                isActive
                  ? 'bg-blue-600 flex items-center w-full p-1 font-medium text-xl text-white transition duration-75 rounded-lg pl-11'
                  : 'bg-white flex items-center w-full p-1 hover:text-blue-500 font-medium text-xl text-gray-600 transition duration-75 rounded-lg pl-11'
              }
              to={item.path}
            >
              <li key={item.code}>{item.title}</li>
            </NavLink>
          );
        })}
      </ul>
    </li>
  );
};

export default InternItemMenu;
