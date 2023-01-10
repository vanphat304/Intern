import React from 'react';
import './NavbarNoLogin.css';
import { Link } from 'react-router-dom';
function NavbarNoLogin() {

  

  return (
    <div className="Container_Navbar">
      {/*  navbar header : */}
      <div className="navbar-header">
        <img
          src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
          alt="logo-huit"
          title="logo huit"
        />
      </div>

      {/*  navbar left : */}
      <ul className="navbar-left__item group">
        <label htmlFor="vieclam">
          <li className="navbar-left active">
            Việc làm
            <input type="checkbox" id="vieclam" />
            <div className="navbar_dropdown">
              <ul className="navbar_menu">
                <li className="navbar_menu-item">Tìm việc làm</li>
                <li className="navbar_menu-item">Việc làm đã ứng tuyển</li>
                <li className="navbar_menu-item">Việc làm đã lưu</li>
                <li className="navbar_menu-item">Việc làm phù hợp</li>
              </ul>
            </div>
          </li>
        </label>

        <label htmlFor="cv">
          <li className="navbar-left active">
            Hồ sơ &amp; CVy
            <input type="checkbox" id="cv" />
            <div className="navbar_dropdown">
              <ul className="navbar_menu">
                <li className="navbar_menu-item">Quản lý CV</li>
              </ul>
            </div>
          </li>
        </label>

        <label htmlFor="congty">
          <li className="navbar-left active">
            Công ty
            <input type="checkbox" id="congty" />
            <div className="navbar_dropdown">
              <ul className="navbar_menu">
                <li className="navbar_menu-item">Danh sách công ty</li>
                <li className="navbar_menu-item">Top công ty</li>
                <li className="navbar_menu-item">Đề xuất công ty thực tập</li>
              </ul>
            </div>
          </li>
        </label>
        <li className="navbar-left group">CÔNG TY NỔI BẬT</li>
      </ul>

      {/*  navbar right : */}

      <ul className="navbar-right">
        <Link to={'/auth/login'} className="navbar-right__item">
          <button className="navbar-right__item-logion"> Đăng nhập</button>
        </Link>
        <Link to={'/auth/register'} className="navbar-right__item">
          <button className="navbar-right__item-register"> Đăng ký</button>
        </Link>
        {/* <li className="navbar-right__item">
          <button className="navbar-right__item-manager"> Đăng tuyển &amp; tìm hồ sơ</button>
        </li> */}
      </ul>
    </div>
  );
}
export default NavbarNoLogin;
