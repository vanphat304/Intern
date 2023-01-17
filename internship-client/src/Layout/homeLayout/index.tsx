import React from 'react';
import NavbarNoLogin from '../../containers/ComponentPages/NavbarLogin/NavbarNoLogin';
import Search from '../../containers/ComponentPages/Search/Search';
import { Outlet, Route } from 'react-router-dom';
import Navbar from '../../containers/ComponentPages/Navbar/Navbar';
import Footer from '../../containers/ComponentPages/Footer copy/Footer';
import Boxgeneral from '../../containers/ComponentPages/Boxgeneral/Boxgeneral';
import FormAuthentication from '../../containers/ComponentPages/FORMAUTHEN/Formauthen';
import Login from '../../containers/ComponentPages/LOGIN/Login';
import Register from '../../containers/ComponentPages/REGISTER/Register';

const HomeLayout = () => {
  return (
    <div className="App">
      <div className="header">
        <Navbar />
        <Search />
      </div>
      <div className="container">
        <Outlet />
      </div>
      <div className="gutter">
        <Boxgeneral />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
