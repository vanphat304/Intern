import { ArrowRightOutlined, HeartOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Slider from 'react-slick';
import './Featurejob.css';
import { useQuery } from '@tanstack/react-query';
import { Service } from '../../../services/service';
import { CACHE_TIME, QUERY_KEY_COMPANY, QUERY_KEY_JOB_COM, STALE_TIME } from '../../../enums';
import { Link, useSearchParams } from 'react-router-dom';
import { useSearchAppStore } from '../../../store/searchStore';
import InternButtonLike from '../../../components/InternButtonLike';
import { useAuthStore } from '../../../store';

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

  const [{ userLogin }] = useAuthStore();

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
                      ? 'text-white mx-2 p-2 bg-blue-600 rounded-full'
                      : 'bg-blue-50 mx-2 p-2 rounded-full'
                  }`}
                  style={{ width: '100px' }}
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
                    const { StudentLikeJob } = item;
                    let isLike = StudentLikeJob.map((item) => item?.studentId).includes(
                      userLogin?.id,
                    );
                    return (
                      <div className="cl-3">
                        <div className="feature_boxJob-item">
                          <div className="boxJob_title">
                            <div className="boxJob_title-img">
                              <img src={item?.company?.logo} alt="logo" />
                            </div>

                            <div className="boxJob_title-des">
                              <Link to={`/job-description/${item?.jobId}`}>
                                <span className="boxJob_title-des-name">{item?.jobTitle}</span>
                              </Link>
                              <span className="boxJob_title-des-cpn">
                                {item?.company?.nameCompany}
                              </span>
                            </div>
                            <div className="button_saveJob">
                              <InternButtonLike
                                init={isLike}
                                studentId={userLogin?.id}
                                jobId={item?.jobId}
                              />
                            </div>
                          </div>
                          <div className="boxJob_adress">
                            <span>{item?.company?.address}</span>
                          </div>
                        </div>
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
