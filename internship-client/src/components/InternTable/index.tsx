import { AxiosResponse } from 'axios';
import React, { Fragment } from 'react';
import { Student, Students } from '../../types/students.type';
import InternTablePagination from './InternTablePagination';
import { datesFormat } from '../../enums';
import { formatDateTime } from '../../helpers/datetime';
import { getNestedValue } from '../../helpers/object';
import { useQueryString } from '../../hook/useQueryString';

type tableType = {
  columns: Array<any>;
  dataSource: Array<any>;
  isLoading?: boolean;
  counts?: number;
};

type columnType = {
  title: string;
  dataIndex: string;
  key: string;
};

type studentType = 'id' | 'email' | 'avatar';

const InternTable = ({ columns = [], dataSource, isLoading = false, counts = 10 }: tableType) => {
  const [queryString] = useQueryString();
  const { pageNumber, pageSize } = queryString;

  return (
    <>
      {isLoading ? (
        new Array(10)
          .fill(1)
          .map((item, index) => (
            <div
              key={index}
              className={`${
                index % 2 === 0 ? 'animate-pulse bg-slate-500' : 'animate-pulse bg-slate-400'
              } p-5`}
            ></div>
          ))
      ) : (
        <>
          <div className="relative overflow-x-auto mt-6">
            <table className="table table-compact w-full border-solid border border-gray-200">
              <thead className="bg-slate-50 text-base uppercase font-semibold text-blue-700">
                <tr className="bg-slate-50 font-semibold text-base border">
                  {columns?.map((object: columnType, index) => {
                    return (
                      <Fragment key={index}>
                        {index === columns.length - 1 ? (
                          <th
                            key={object.key}
                            scope="col"
                            className="py-3 px-16 border bg-white sticky right-0 z-10"
                          >
                            {object.title}
                          </th>
                        ) : (
                          <th key={object.key} scope="col" className="py-3 whitespace-nowrap w-8 px-6 border text-base">
                            {object.title}
                          </th>
                        )}
                      </Fragment>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                {dataSource?.map((data, index) => {
                  return (
                    <tr
                      key={index}
                      className={`${
                        index % 2 === 0
                          ? 'bg-slate-200 hover:bg-slate-300'
                          : 'bg-slate-100 hover:bg-slate-300'
                      } hover:cursor-pointer`}
                    >
                      {columns?.map(({ dataIndex, key, render }, indexColumn) => {
                        if (key !== 'action' && render) {
                          return (
                            <td key={dataIndex} className="text-center py-4 px-6 whitespace-nowrap">
                              {render
                                ? render(getNestedValue(dataIndex, data))
                                : data[dataIndex as studentType]}
                            </td>
                          );
                        } else if (key === 'index') {
                          return (
                            <td key={dataIndex} className="text-center py-4 px-6 whitespace-nowrap">
                              {index + 1}
                            </td>
                          );
                        } else if (key !== 'action') {
                          return (
                            <Fragment key={indexColumn}>
                              {dataIndex === 'logo' ? (
                                <td
                                  key={dataIndex}
                                  className="py-4 px-6 flex justify-center align-middle whitespace-nowrap"
                                >
                                  <img src={data['logo']} alt="img" className="w-20 h-auto" />
                                </td>
                              ) : (
                                <td key={dataIndex} className="text-center py-4 px-6 whitespace-nowrap">
                                  {dataIndex !== 'index'
                                    ? datesFormat.includes(dataIndex)
                                      ? formatDateTime(data[dataIndex as studentType])
                                      : getNestedValue(dataIndex, data)
                                    : indexColumn + 1}
                                </td>
                              )}
                            </Fragment>
                          );
                        } else {
                          return (
                            <td
                              key={key}
                              className={`${
                                index % 2 === 0
                                  ? 'bg-slate-200 hover:bg-slate-300'
                                  : 'bg-slate-100 hover:bg-slate-300'
                              } text-center py-4 px-6 sticky  right-0 z-10`}
                            >
                              {render
                                ? render(data.id || data.jobId || data.studentId)
                                : data[dataIndex as studentType]}
                            </td>
                          );
                        }
                      })}
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr className="bg-slate-50 font-semibold text-base border">
                  {columns.map((object: columnType) => {
                    return (
                      <th
                        key={object.key}
                        scope="col"
                        className="text-xs uppercase font-semibold text-blue-700 bg-slate-50 sticky right-0 z-10"
                      >
                        {object.title}
                      </th>
                    );
                  })}
                </tr>
              </tfoot>
            </table>
          </div>
          <InternTablePagination pageNumber={pageNumber as number} totalpageSize={counts} />
        </>
      )}
    </>
  );
};

export default InternTable;
