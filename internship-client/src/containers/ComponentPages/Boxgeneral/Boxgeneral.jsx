import React from 'react';
import './Boxgeneral.css';
import { useQuery } from '@tanstack/react-query';
import { Service } from '../../../services/service';
import { CACHE_TIME, QUERY_KEY_COMPANY, STALE_TIME } from '../../../enums';
import { Link } from 'react-router-dom';
function BoxGeneral() {
  const { isLoading, data: companies = [] } = useQuery({
    queryFn: () => Service.getCompanies(),
    queryKey: [QUERY_KEY_COMPANY],
    // cacheTime: CACHE_TIME,
    // staleTime: STALE_TIME,
    // refetchOnWindowFocus: false,
  });

  return (
    <div className="Boxgeneral">
      <div className="Boxgeneral_title">
        <h4>Các công ty tuyển dụng hàng đầu</h4>
      </div>
      <div className="Boxgeneral_listCompany">
        <div className="grid grid-cols-6">
          {companies
            .sort((com1, com2) => com1?.rating - com2.rating)
            .map((item) => {
              return (
                <div key={item?.id} className="col-span-1">
                  <Link to={`/company-detail/${item?.id}`}>
                    <div className="box_companyItem hover:scale-125 cursor-pointer">
                      <img
                        src={item?.logo}
                        alt={item?.nameCompany}
                        className="lazy img-responsive"
                        style={{ display: 'block' }}
                      />
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
export default BoxGeneral;
