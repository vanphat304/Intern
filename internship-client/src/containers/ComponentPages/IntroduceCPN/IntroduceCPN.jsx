import React from 'react';

import { CopyOutlined, EnvironmentOutlined } from '@ant-design/icons';
import './IntroduceCPN.css';
import ListRecruitCPN from '../ListRecruitCPN/ListRecruitCPN';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';
function IntroduceCPN({ introduce, id, address }) {
  return (
    <div className="introduceCPN">
      <div className="grid">
        <div className="row">
          <div className="cl-8">
            <div className="des_company">
              <p className="des_company-title">Giới thiệu công ty</p>
              <div className="des_company-body">
                <div dangerouslySetInnerHTML={{ __html: introduce }}></div>
              </div>
            </div>
            <ListRecruitCPN id={id} />
          </div>

          <div className="cl-4">
            <div className="box_adressCPN">
              <p className="title_adressCPN">Địa chỉ công ty</p>
              <div className="name_adressCPN">
                <EnvironmentOutlined />
                <span>{address}</span>
              </div>
              <p className="title_map">Bản đồ trụ sở chính</p>
              <div className="map">
                <img
                  src="https://tse2.mm.bing.net/th?id=OIP.SdEYzELUpx8anUY2qfvd4QHaOU&pid=Api&P=0"
                  alt=""
                />
              </div>
            </div>

            <div className="share_CPN">
              <p className="title_adressCPN">Chia sẻ công ty tới bạn bè</p>
              <p className="title_map">Sao chép đường dẫn</p>
              <div className="box-copy">
                <input
                  type="text"
                  defaultValue={window.location.href}
                  className="url-copy"
                  readOnly
                />
                <div className="btn-copy">
                  <CopyToClipboard
                    text={window.location.href}
                    onCopy={() => toast.success(`copy success`)}
                  >
                    <button className="btn-copy-url">
                      <CopyOutlined />
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IntroduceCPN;
