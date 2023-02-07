import React from 'react';
import { GlobalOutlined, HomeOutlined } from '@ant-design/icons';
import './HeaderCompany.css';
import { Link } from 'react-router-dom';
import { SCALE_COMPANY } from '../../../types/scale';

function HeaderCompany({ banner, logo, nameCompany, website, scale }) {
  return (
    <div className="HeaderCompany">
      <div className="header_bgCompany">
        <img
          src={banner || 'https://www.topcv.vn/images/default_cover/default_normal_cover.jpg'}
          alt="ima"
          className="cover-img"
        />
      </div>
      <div className="header_introduceCompany">
        <div className="header_avatarCompany">
          <div className="header__image">
            <img
              src={logo}
              alt={nameCompany}
              width={'100%'}
              height="100%"
              className="img-responsive"
            />
          </div>
        </div>
        <div className="header_detailCompany">
          <span className="nameCompany">{nameCompany}</span>
          <div className="below_nameCompany">
            <div className="websiteCompany">
              <GlobalOutlined />
              <a target={'_blank'} rel="noreferrer" className="ml-1r" href={website}>
                {website}
              </a>
            </div>
            <div className="scaleCompany">
              <HomeOutlined />
              <span className="ml-1r">{SCALE_COMPANY.find((item) => item.id == scale)?.name}</span>
            </div>
          </div>
        </div>
        {/* <div className="btn_followCompany">
          <button>Theo dõi công ty</button>
        </div> */}
      </div>
    </div>
  );
}

export default HeaderCompany;
