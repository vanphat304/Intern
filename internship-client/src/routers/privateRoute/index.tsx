import React, { useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { COMPONENTS_PRIVATE_ADMIN_FLATTED_MAP } from '../../constants/pagePath';
import MainLayout from '../../Layout/mainLayout';

const PrivateRoute = () => {
  const childrenMemo = useMemo(
    () => (
      <Routes>
        {COMPONENTS_PRIVATE_ADMIN_FLATTED_MAP.map(({ Component, path }) => (
          <Route
            element={
              <MainLayout>
                <>{Component}</>
              </MainLayout>
            }
            key={path}
            path={path}
          ></Route>
        ))}
      </Routes>
    ),
    [],
  );

  return childrenMemo;
};

export default PrivateRoute;
