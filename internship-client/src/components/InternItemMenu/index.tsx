import React, { ReactElement, ReactNode, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

type typeSubmenu = {
  code: string;
  path: string;
  title: string;
  Icon?: ReactNode | ReactElement | any;
};

type typeMenuItem = {
  code: string;
  title: string;
  subMenu: typeSubmenu[];
  Icon?: ReactNode | ReactElement | any;
};

const InternItemMenu = ({ code, title, subMenu, Icon }: typeMenuItem) => {
  const [toggle, setToggle] = useState(false);

  return (
    <li>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base font-normal text-gray-600 transition duration-75 rounded-lg"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {<Icon />}
        <span className="flex-1 ml-3 text-2xl text-gray-900 font-bold text-left whitespace-nowrap">
          {title}
        </span>
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
