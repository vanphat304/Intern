import React, { Component } from 'react';
import { Typography } from 'antd';
import { BellFilled, DownOutlined, SnippetsFilled } from '@ant-design/icons';
import './Navbar.css';
import '../NavbarLogin/NavbarNoLogin.css';
import { Link, NavLink } from 'react-router-dom';
import { useAuthStore } from '../../../store';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Service } from '../../../services/service';
import { parserDateTime, formatDateTime } from '../../../helpers/datetime';
import { CACHE_TIME, QUERY_KEY_NOTIFICATION, STALE_TIME } from '../../../enums';

function Navbar() {
  const [user, setAuth] = useAuthStore();
  setAuth({ type: 'LOGOUT', data: '132' });


  const { id } = user || {};

  const { data: notifications = [], refetch } = useQuery({
    queryFn: () => Service.getNotificationByStudentId({ id }),
    refetchOnWindowFocus: false,
    queryKey: [QUERY_KEY_NOTIFICATION, id],
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
  });

  const { data, mutate: readNotification } = useMutation({
    mutationFn: (id) => Service.updateNotification({ id }),
    onSuccess: () => {
      refetch();
    },
  });

  return (
    <div className="Container_Navbar">
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
                <li className="navbar_menu-item">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? 'text-green-500 font-semibold' : ''}`
                    }
                    to={'/'}
                  >
                    Tìm việc làm
                  </NavLink>
                </li>
                <li className="navbar_menu-item">
                  <NavLink
                    className={({ isActive }) =>
                      `${isActive ? 'text-green-500 font-semibold' : ''}`
                    }
                    to={'/history-apply'}
                  >
                    Việc làm đã ứng tuyển
                  </NavLink>
                </li>
                <li className="navbar_menu-item">Việc làm đã lưu</li>
                <li className="navbar_menu-item">Việc làm phù hợp</li>
              </ul>
            </div>
          </li>
        </label>

        <label htmlFor="cv">
          <li className="navbar-left active">
            Hồ sơ &amp; CV
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
              </ul>
            </div>
          </li>
        </label>
        <li className="navbar-left group">CÔNG TY NỔI BẬT</li>
      </ul>

      {/*  navbar right : */}

      {!user ? (
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
      ) : (
        <ul className="navbar-right">
          <label htmlFor="notify">
            <li id="nav-notification" className="navbar-right__item icon">
              <input type="checkbox" id="notify" />
              <BellFilled />
              {notifications.filter((item) => !item.isRead)?.length !== 0 && (
                <span className="notification-count">
                  {notifications.filter((item) => !item.isRead)?.length}
                </span>
              )}

              <div className="nav_notify-dropdown">
                <div className="header">
                  <span className="title-header">Thông báo</span>
                  <span id="check-header">Đánh dấu tất cả là đã đọc</span>
                </div>
                <ul className="nav_notify_menu">
                  {notifications.map((item) => {
                    return (
                      <li
                        onClick={() => {
                          !item.isRead && readNotification(item.id);
                          console.log('123');
                        }}
                        className={`nav_notify_menu-item hover:bg-slate-300 ${
                          !item.isRead && 'bg-slate-200'
                        } `}
                      >
                        <span className="hover:text-green-600">
                          <div className="notifi_title flex items-center hover:text-green-600">
                            <SnippetsFilled className="text-gray-500 hover:text-green-600" />
                            <span className="text-gray-500 hover:text-green-600">
                              {item?.content}
                            </span>
                          </div>
                          <div className="notify_text text-gray-500 hover:text-green-600">
                            {item?.note}
                          </div>
                          <span className="text-xs text-gray-700 font-light hover:text-green-600">
                            {formatDateTime(item?.createdAt, 'DD/MM/YYYY')}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
          </label>

          <label htmlFor="infor-user">
            <li className="navbar-right__item group">
              <input type="checkbox" id="infor-user" />
              <div className="title">
                <img
                  src="https://static.topcv.vn/avatars/DghN4mGzENaH5ypnhUSt_627776bf7cf0a_cvtpl.jpg"
                  alt="Nguyên Trần Thị Thảo"
                />
                <span className="fullname">{user.lastName + ' ' + user.firstName}</span>
                <DownOutlined />
              </div>
              <div className="navbar_dropdown dropdown_infor-user">
                <div className="nav_infor-user">
                  <img
                    src="https://static.topcv.vn/avatars/DghN4mGzENaH5ypnhUSt_627776bf7cf0a_cvtpl.jpg"
                    alt="Nguyên Trần Thị Thảo"
                  />
                  <div className="nav_infor-user-text">
                    <span className="infor_user-name">{user.lastName + ' ' + user.firstName}</span>
                    <span className="infor_user-code">
                      Mã ứng viên : <span className="user_code">#{user.identifierStudent}</span>
                    </span>
                  </div>
                </div>
                <ul className="navbar_menu">
                  <li className="navbar_menu-item">Đổi mật khẩu</li>
                  <li
                    onClick={() => {
                      console.log('data');
                      setAuth({ type: 'LOGOUT', data: '132' });
                    }}
                    className="navbar_menu-item"
                  >
                    Đăng xuất
                  </li>
                </ul>
              </div>
            </li>
          </label>
        </ul>
      )}
    </div>
  );
}

export default Navbar;
