import React from 'react';
import HeaderCompany from '../../containers/ComponentPages/HeaderCompany/HeaderCompany';
import IntroduceCPN from '../../containers/ComponentPages/IntroduceCPN/IntroduceCPN';
import ListRecruitCPN from '../../containers/ComponentPages/ListRecruitCPN/ListRecruitCPN';
import { useParams, useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Service } from '../../services/service';
import { CACHE_TIME, QUERY_KEY_COMPANY_DETAIL, QUERY_KEY_JOB_DES, STALE_TIME } from '../../enums';

const CompanyDetail = () => {
  const { id } = useParams();

  const { isLoading, data: companyDetail = {} } = useQuery({
    queryFn: () => Service.getCompany({ id }),
    queryKey: [QUERY_KEY_COMPANY_DETAIL, id],
    cacheTime: CACHE_TIME,
    staleTime: STALE_TIME,
    refetchOnWindowFocus: false,
  });

  const { banner, logo, nameCompany, website, scale , introduce , address } = companyDetail || {};


  return (
    <>
      {' '}
      <HeaderCompany
        banner={banner}
        logo={logo}
        nameCompany={nameCompany}
        website={website}
        scale={scale}
      />
      <IntroduceCPN id={id} introduce = {introduce} address={address} />
    </>
  );
};

export default CompanyDetail;
