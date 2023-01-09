import { CloseOutlined } from '@ant-design/icons';
import React from 'react';
import Login from '../LOGIN/Login';
import Register from '../REGISTER/Register';
import { Outlet } from 'react-router-dom';
import './Formauthen.css';
import { FormProvider } from 'antd/es/form/context';
import InternRow from '../../../components/InternRow';
import InternText from '../../../components/InternInput/InternText';
import InternButtonSubmit from '../../../components/InternButton/InternButtonSubmit';
function FormAuthentication() {
  return (
    <section className="h-screen">
      <div className="px-6 h-full text-gray-800">
        <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div className="xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <Outlet />
          </div>
          <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://www.topcv.vn/v4/image/tool-cv.png"
              alt="img"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default FormAuthentication;
