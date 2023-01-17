import React, { Component } from 'react';
import './Search.css';
import { Select } from 'antd';
import { useQuery } from '@tanstack/react-query';
import { Service } from '../../../services/service';
import { CACHE_TIME, QUERY_KEY_COMPANY, STALE_TIME } from '../../../enums';
import { useForm, useController } from 'react-hook-form';
import { useSearchAppStore } from '../../../store/searchStore';
import InternSelect from '../../../components/InternInput/InterSelect';
function Search() {
  const [, setSearchItem] = useSearchAppStore();

  const { data: specializes = [] } = useQuery({
    queryFn: () => Service.getCompanySpecialize({}),
    queryKey: [QUERY_KEY_COMPANY, 'specialize', 'search'],
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  });

  const { data: provinces = [] } = useQuery({
    queryFn: () => Service.getCompanyProvince({}),
    queryKey: [QUERY_KEY_COMPANY, 'province', 'search'],
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  });

  const { register, getValues, control } = useForm();
  const {
    field: { onChange },
  } = useController({ control, name: 'specializeCompanyId' });

  const {
    field: { onChange: onChangeSelect },
  } = useController({ control, name: 'addressProvinceId' });
  return (
    <div className="search_job  bg-white">
      <div className="container box-search-job box">
        <div className="row-search">
          <div className="input-data search-input">
            <input
              {...register('searchItem')}
              placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."
            />
          </div>
          <div className="input-data search-select">
            <Select
              allowClear
              showSearch
              filterOption={(value, option) =>
                option.props.children?.toString()?.toLowerCase()?.indexOf(value.toLowerCase()) >= 0
              }
              placeholder="Lĩnh vực công ty"
              style={{ width: '100%' }}
              onChange={onChange}
            >
              {specializes.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item?.name}
                  </option>
                );
              })}
            </Select>
          </div>

          <div className="input-data search-select">
            <Select
              placeholder="Địa điểm"
              showSearch
              allowClear
              filterOption={(value, option) =>
                option.props.children?.toString()?.toLowerCase()?.indexOf(value.toLowerCase()) >= 0
              }
              className="form-control select_form-findJob"
              style={{ width: '100%' }}
              onChange={onChangeSelect}
              name="addressProvinceId"
            >
              {provinces.map((item) => {
                return (
                  <option key={item.id} value={item.id}>
                    {item?.name}
                  </option>
                );
              })}
            </Select>
          </div>
          <div className="input-data search-submit">
            <button
              onClick={() => {
                console.log(getValues());
                setSearchItem({ type: 'SEARCH_JOB', data: { ...getValues() } });
              }}
              className="btn btn-search btn-primary btn-primary-hover"
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
