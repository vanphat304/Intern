import { useSearchParams, useLocation } from 'react-router-dom';

interface typeSearchParams {
  pageNumber?: string | number;
  pageSize?: string | number;
  searchItem?: string | undefined | number;
}

const DEFAULT_PAGE_SIZE = 10;
const DEFAULT_PAGE_NUMBER = 1;

export const useQueryString = <T>(key?: T): [typeSearchParams, (a: any) => void, any] => {
  const location = useLocation();

  console.log({ location });

  const [URLSearchParams, SetURLSearchParams] = useSearchParams();
  const searchParamsObject = Object.fromEntries([...URLSearchParams]);

  const pageNumber = Number(searchParamsObject?.pageNumber) || DEFAULT_PAGE_NUMBER;
  const pageSize = Number(searchParamsObject?.pageSize) || DEFAULT_PAGE_SIZE;
  const searchItem = searchParamsObject?.searchItem || '';
  const propsKeysSearch = searchParamsObject?.[key as string];

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
