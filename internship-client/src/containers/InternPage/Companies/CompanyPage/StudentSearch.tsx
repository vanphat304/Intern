import React from 'react'
import InternSearch from '../../../../components/InternSearchContainer'


type searchItemType = {
  searchItem : string ;
}

type typeInternSearch = {
  onClick: (a:searchItemType) => void;
};

const StudentSearch = ({onClick} : typeInternSearch) => {
  return (
    <InternSearch onClick={onClick} />
  )
}

export default StudentSearch