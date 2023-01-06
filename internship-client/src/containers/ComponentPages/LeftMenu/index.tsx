import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InternItemMenu from '../../../components/InternItemMenu';
import { COMPONENTS_LEFT_MENU } from '../../../constants/pagePath';
// import logo from './public/image/logo-hufi';
import logo from './logo-hufi.png';

const LeftMenu = () => {

  return (
    <ul className="space-y-2">
      <li>
        <img src={logo} alt="logo" />
      </li>
      {COMPONENTS_LEFT_MENU.map(({ title, subMenu, code }) => {
        return <InternItemMenu title={title} subMenu={subMenu} code={code} key={code} />;
      })}
    </ul>
  );
};

export default LeftMenu;
