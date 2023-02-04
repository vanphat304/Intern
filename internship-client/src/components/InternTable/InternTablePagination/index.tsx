import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useQueryString } from '../../../hook/useQueryString';

type pagination = {
  pageSize?: number;
  totalpageSize?: number;
  pageNumber: number;
};

const InternTablePagination = ({
  pageSize = 10,
  totalpageSize = 10,
  pageNumber = 1,
}: pagination) => {
  const { pathname } = useLocation();

  const [params] = useQueryString();

  console.log({ params });

  return (
    <div className="mt-6 flex justify-center">
      <nav aria-label="pageSize navigation example">
        <ul className="inline-flex -space-x-px">
          <li>
            {pageNumber === 1 ? (
              <span className="cursor-not-allowed rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 ">
                Previous
              </span>
            ) : (
              <Link
                className="rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
                to={`${pathname}?pageNumber=${pageNumber - 1}&pageSize=${pageSize}`}
              >
                Previous
              </Link>
            )}
          </li>
          {Array(Math.ceil(totalpageSize / pageSize ))
            .fill(0)
            .map((_, index) => {
              const pageSizeNumber = index + 1;
              const isActive = pageSize === pageSizeNumber;
              if (index === 3) {
                index+=4
                return (
                  <li key={pageSizeNumber}>
                    <Link
                      className={`border border-gray-300   py-2 px-3 leading-tight  hover:bg-gray-100 hover:text-gray-700 ${
                        isActive && 'bg-gray-100 text-gray-700'
                      }
        
            `}
                      to={`${pathname}?pageNumber=${pageSizeNumber}&pageSize=${pageSize}`}
                    >
                      ...
                    </Link>
                  </li>
                );
              }
              return (
                <li key={pageSizeNumber}>
                  <Link
                    className={`border border-gray-300   py-2 px-3 leading-tight  hover:bg-gray-100 hover:text-gray-700 ${
                      isActive && 'bg-gray-100 text-gray-700'
                    }
                
                    `}
                    to={`${pathname}?pageNumber=${pageSizeNumber}&pageSize=${pageSize}`}
                  >
                    {pageSizeNumber}
                  </Link>
                </li>
              );
            })}
          <li>
            {pageNumber === Math.ceil(totalpageSize / pageSize ) ? (
              <span className="cursor-not-allowed rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 ">
                Next
              </span>
            ) : (
              <Link
                className="rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 "
                to={`${pathname}?pageNumber=${pageNumber + 1}&pageSize=${pageSize}`}
              >
                Next
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default InternTablePagination;
