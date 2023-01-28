import { useSearchParams, useLocation } from 'react-router-dom';

interface typeSearchParams {
  pageNumber?: string | number;
  pageSize?: string | number;
  searchItem?: string | undefined | number;
}

const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE_NUMBER = 1;

export const useQueryString = <T>(key?: T): [typeSearchParams, (a: any) => void, any] => {
  // const location = useLocation();

  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries([...URLSearchParams]);

  console.log({searchParamsObject});
  

  const pageNumber = Number(searchParamsObject?.pageNumber) || DEFAULT_PAGE_NUMBER;
  const pageSize = Number(searchParamsObject?.pageSize) || DEFAULT_PAGE_SIZE;
  const searchItem = searchParamsObject?.searchItem || '';
  
  console.log("keyyy", typeof searchParamsObject?.[key as string]);
  const propsKeysSearch = searchParamsObject?.[key as string] || ''; 

  
  console.log({propsKeysSearch});
  

  return [
    {
      pageNumber,
      pageSize,
      searchItem,
    },
    SetURLSearchParams,
    {
      [key as string]: propsKeysSearch,
    },
  ];
};
