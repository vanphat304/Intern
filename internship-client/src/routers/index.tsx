import React from 'react';
import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import { COMPONENTS_PRIVATE_ADMIN_FLATTED_MAP } from '../constants/pagePath';
import InternPageContainer from '../containers/InernContainer/InternPageContainer';
import MainLayout from '../Layout/mainLayout';
import AdminPage from '../pages/Admin';
import HomePage from '../pages/Home';
import LoginPage from '../pages/login/loginPage';
import PageNotFound from '../pages/pageNotFound/pageNotFound';
import Profile from '../pages/Profile/profile';
import RegisterPage from '../pages/register/register';
import CustomrPivateRoute from './customPrivateRoute/customPrivateRoute';
import PrivateRoute from './privateRoute';
import HomeLayout from '../Layout/homeLayout';
import Featurejob from '../containers/ComponentPages/FeaturesJob/Featurejob';
import FormAuthentication from '../containers/ComponentPages/FORMAUTHEN/Formauthen';
import Login from '../containers/ComponentPages/LOGIN/Login';
import CompanyDetail from '../pages/Company';
import JobDescription from '../containers/ComponentPages/DETAILJOB/APLLYJOB/JobDescription';
import FeatureJob from '../containers/ComponentPages/FeaturesJob/Featurejob';
import Register from '../containers/ComponentPages/REGISTER/Register';
import CustomPrivateRoute from './customPrivateRoute/customPrivateRoute';
import { HistoryApply } from '../containers/ComponentPages/HistoryApply';
import ReportCompany from '../containers/ComponentPages/ReportCompany';
import { useAuthStore } from '../store';

type typeRenderComponent = {
  Component: React.FunctionComponent<any>;
  path: string;
  code: string;
  title: string;
};

const Routers = () => {
  const [{ userLogin }] = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeLayout />}>
          <Route path="/" element={<FeatureJob />}></Route>
          <Route path="/company-detail/:id" element={<CompanyDetail />}></Route>
          <Route path="/job-description/:id" element={<JobDescription />}></Route>
          <Route element={<CustomPrivateRoute redirectPath="/auth/login" check={userLogin} />}>
            <Route path="/history-apply" element={<HistoryApply />}></Route>
          </Route>
          <Route path="/report-company" element={<ReportCompany />}></Route>
        </Route>

        <Route path="/auth" element={<FormAuthentication />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>

        <Route element={<CustomPrivateRoute redirectPath="/" />}>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>

        <Route element={<CustomPrivateRoute redirectPath="/" />}>
          <Route path="/admin" element={<AdminPage />}></Route>
        </Route>

        {COMPONENTS_PRIVATE_ADMIN_FLATTED_MAP.map(
          ({ Component, path, code, title }: typeRenderComponent) => (
            <Route
              element={
                <MainLayout>
                  <InternPageContainer title={title}>
                    <Component />
                  </InternPageContainer>
                </MainLayout>
              }
              key={path}
              path={path}
            ></Route>
          ),
        )}

        {/* <PrivateRoute /> */}

        <Route path="*" element={<Navigate to="/not-found" />}></Route>
        <Route path="/not-found" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
