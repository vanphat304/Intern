import { Popover, Popconfirm } from 'antd';
import React from 'react';
import InternButtonSubmit from '../../../components/InternButton/InternButtonSubmit';
import { useAuthStore } from '../../../store';
import { useAppStore } from '../../../store/appStore';

const Header = () => {
  const [current] = useAppStore();
  const [user] = useAuthStore()

  const contentPopover = (
    <div>
      <span></span>
      <Popconfirm  placement="bottomRight" title={'đăng xuất khỏi hệ thống'}>
        <div>bạn muốn đăng xuất</div>
        <button>
            yes
        </button>
      </Popconfirm>
    </div>
  );

  return (
    <div className="grid grid-cols-5 min-h-16 px-6 mb-6 bg-gradient-to-r from-blue-600">
      <div className="col-span-4 flex items-center">
        <h1 className="text-white text-3xl font-bold my-5">{current.currentTitle}</h1>
      </div>
      <Popover content={contentPopover} placement="bottomRight" trigger={'click'}>
        <div className="col-span-1 flex items-center justify-end">
          <h1 className="mr-4 font-medium text-xl">{user?.username}</h1>
          <div className="w-16 h-16 rounded-full flex justify-center items-center cursor-pointer bg-orange-300 text-xl">
            {user?.role?.substr(0,1)}
          </div>
        </div>
      </Popover>
    </div>
  );
};

export default Header;
