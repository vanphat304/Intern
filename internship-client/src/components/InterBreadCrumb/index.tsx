import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPONENTS_LEFT_MENU } from '../../constants/pagePath';
import InternRow from '../InternRow';

function InternBreadCrumb() {
  const location = useLocation();

  const foundGroup = COMPONENTS_LEFT_MENU.find((item) => location.pathname?.startsWith(item.path));
  const foundSub = foundGroup?.subMenu?.find((subItem) => location.pathname === subItem.path);

  const breadcrumbRoutes = [
    {
      path: foundGroup?.path,
      breadcrumbName: foundGroup?.title,
    },
    {
      path: foundSub?.path,
      breadcrumbName: foundSub?.title,
    },
  ];

  return (
    <InternRow>
      <ul className="flex items-center mb-6">
        {breadcrumbRoutes.map((item, index) => (
          <li
            key={index}
            className={`inline-flex items-center font-bold ${
              index === breadcrumbRoutes.length - 1 ? 'text-black' : 'text-gray-400'
            } uppercase`}
          >
            {item.breadcrumbName}
            {index === breadcrumbRoutes.length - 1 ? (
              ''
            ) : (
              <svg
                className="w-5 h-auto fill-current mx-2 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
              </svg>
            )}
          </li>
        ))}
      </ul>
    </InternRow>
  );
}

export default InternBreadCrumb;
