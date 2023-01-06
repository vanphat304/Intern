import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type propsRoutePrivateType = {
  check?: boolean;
  redirectPath?: string;
  children?: React.ReactElement;
};

const CustomPrivateRoute  =  ({
  check = false,
  redirectPath = '/not-found',
  children = <Outlet />,
}: propsRoutePrivateType) => {
  if (check) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
};
export default CustomPrivateRoute;
