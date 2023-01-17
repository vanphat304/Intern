import { ArrowRightOutlined, HeartOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Slider from 'react-slick';
import './Featurejob.css';
import { useQuery } from '@tanstack/react-query';
import { Service } from '../../../services/service';
import { CACHE_TIME, QUERY_KEY_COMPANY, QUERY_KEY_JOB_COM, STALE_TIME } from '../../../enums';
import { Link, useSearchParams } from 'react-router-dom';
import { useSearchAppStore } from '../../../store/searchStore';

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
  slidesToShow: 6,
  slidesToScroll: 2,
  swipeToSlide: true,
};

function FeatureJob() {
  const [search, setSearchJob] = useSearchAppStore();

  console.log({ search });

  const { isLoading, data: jobDescriptionCompanies = [] } = useQuery({
    queryFn: () => Service.getJobDescriptionCompany({ search }),
    queryKey: [QUERY_KEY_JOB_COM, search],
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
    refetchOnWindowFocus: false,
  });

  const { data: districts = [] } = useQuery({
    queryFn: () => Service.getCompanyDistrict({}),
    queryKey: [QUERY_KEY_JOB_COM, 'district'],
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  });

  console.log({ jobDescriptionCompanies });
  return (
    <div>
      <div className="box-featurejob">
        <div className="featureJob_header">
          <h2>Tin tuyển dụng, việc làm tốt nhất</h2>
          <div className="featurejob_seemore">
            <span
              onClick={() => {
                setSearchJob({
                  type: 'SEARCH_JOB',
                  data: {
                    ...search,
                    addressDistrictId: '',
                  },
                });
              }}
              className="seemore-text"
            >
              Xem tất cả
              <span className="seemore-icon"></span>
              <ArrowRightOutlined />
            </span>
          </div>
        </div>
        <div className="featurejob_slideAdress">
          <Slider {...settingMultipleItem}>
            {districts.map((item) => {
              return (
                <button
                  className={`${
                    item.id === search.addressDistrictId
                      ? 'text-white p-1 mx-4 bg-green-600 rounded-xl'
                      : 'bg-blue-50 rounded-xl p-1 mx-4'
                  }`}
                  onClick={() => {
                    console.log('item', item.id);
                    setSearchJob({
                      type: 'SEARCH_JOB',
                      data: {
                        ...search,
                        addressDistrictId: item.id,
                      },
                    });
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </Slider>
        </div>
        {/* settings */}
        <div className="feature_boxJob-detail">
          <Slider {...settings}>
            <div>
              <div className="grid">
                <div className="row">
                  {jobDescriptionCompanies?.map((item) => {
                    return (
                      <div className="cl-3">
                        <Link to={`/job-description/${item?.jobId}`}>
                          <div className="feature_boxJob-item">
                            <div className="boxJob_title">
                              <div className="boxJob_title-img">
                                <img src={item?.company?.logo} alt="logo" />
                              </div>

                              <div className="boxJob_title-des">
                                <span className="boxJob_title-des-name">{item?.jobTitle}</span>
                                <span className="boxJob_title-des-cpn">
                                  {item?.company?.nameCompany}
                                </span>
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
                    );
                  })}
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default FeatureJob;
