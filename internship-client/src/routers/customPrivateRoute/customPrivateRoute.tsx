import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';

type propsRoutePrivateType = {
  check?: boolean | null;
  redirectPath?: string;
  children?: React.ReactElement;
};

const CustomPrivateRoute = ({
  check = false,
  redirectPath = '/not-found',
  children = <Outlet />,
}: propsRoutePrivateType) => {
  console.log({ check });

  if (check) {
    return children;
  } else {
    toast.error('bạn không có quyền truy cập');
    return <Navigate to={redirectPath} replace />;
  }
};
export default CustomPrivateRoute;
