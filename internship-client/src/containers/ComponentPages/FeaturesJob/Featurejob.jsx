import { ArrowRightOutlined, HeartOutlined } from '@ant-design/icons';
import React from 'react';
import Slider from 'react-slick';
import './Featurejob.css';
import { useQuery } from '@tanstack/react-query';
import { Service } from '../../../services/service';
import { CACHE_TIME, QUERY_KEY_COMPANY, QUERY_KEY_JOB_COM, STALE_TIME } from '../../../enums';
import { Link } from 'react-router-dom';

const settings = {
  dots: true,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
};
const settingMultipleItem = {
  infinite: true,
  speed: 1000,
  slidesToShow: 9,
  slidesToScroll: 1,
  swipeToSlide: true,
};

function FeatureJob() {
  const {isLoading, data : jobDescriptionCompanies =[]} = useQuery({
    queryFn: () => Service.getJobDescriptionCompany(),
    queryKey: [QUERY_KEY_JOB_COM],
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
    refetchOnWindowFocus: false,
  });

  console.log({jobDescriptionCompanies});
  return (
    <div>
      <div className="box-featurejob">
        <div className="featureJob_header">
          <h2>Tin tuyển dụng, việc làm tốt nhất</h2>
          <div className="featurejob_seemore">
            <span className="seemore-text">
              Xem tất cả
              <span className="seemore-icon"></span>
              <ArrowRightOutlined />
            </span>
          </div>
        </div>
        {/* settingMultipleItem */}
        <div className="featurejob_slideAdress">
          <Slider {...settingMultipleItem}>
            <div className="btnAdress">
              <button>Quận 1</button>
            </div>
            <div className="btnAdress">
              <button>Quận 2</button>
            </div>

            <div className="btnAdress">
              <button>Thành phố Hồ Chí Minh</button>
            </div>
            <div className="btnAdress">
              <button>Quận 3</button>
            </div>
            <div className="btnAdress">
              <button>Quận 4</button>
            </div>
            <div className="btnAdress">
              <button>Quận 5</button>
            </div>
            <div className="btnAdress">
              <button>Quận 6</button>
            </div>
            <div className="btnAdress">
              <button>Quận 7</button>
            </div>
            <div className="btnAdress">
              <button>Quận 8</button>
            </div>
            <div className="btnAdress">
              <button>Quận 9</button>
            </div>
            <div className="btnAdress">
              <button>Quận 10</button>
            </div>
            <div className="btnAdress">
              <button>Quận 11</button>
            </div>
            <div className="btnAdress">
              <button>Quận 12</button>
            </div>
            <div className="btnAdress">
              <button>Gò Vấp</button>
            </div>
          </Slider>
        </div>
        {/* settings */}
        <div className="feature_boxJob-detail">
          <Slider {...settings}>
            <div>
              <div className="grid">
                <div className="row">
                {
                  jobDescriptionCompanies?.map((item)=>{
                    return   <div className="cl-3">
                      <Link to={`/job-description/${item?.jobId}`}>
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src={item?.company?.logo}
                            alt="logo"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">{item?.jobTitle}</span>
                          <span className="boxJob_title-des-cpn">{item?.company?.nameCompany}</span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                            <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>{item?.company?.address}</span>
                      </div>
                    </div>
                    </Link>

                  </div>
                  })
                }
                </div>
              </div>
            </div>
            {/* <div>
              <div className="grid">
                <div className="row">
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            {/* <div>
              <div className="grid">
                <div className="row">
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                  <div className="cl-3">
                    <div className="feature_boxJob-item">
                      <div className="boxJob_title">
                        <div className="boxJob_title-img">
                          <img
                            src="https://sinhvien.hufi.edu.vn/Content/AConfig/images/sv_logo_dashboard.png"
                            alt="logo-huit"
                            title="logo huit"
                          />
                        </div>

                        <div className="boxJob_title-des">
                          <span className="boxJob_title-des-name">
                            Lập trình viên fullstack
                          </span>
                          <span className="boxJob_title-des-cpn">
                            Công ty công nghệ ABC
                          </span>
                        </div>
                        <div className="button_saveJob">
                          <button>
                          <HeartOutlined />
                          </button>
                        </div>
                      </div>
                      <div className="boxJob_adress">
                        <span>Quận Tân bình</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default FeatureJob;
