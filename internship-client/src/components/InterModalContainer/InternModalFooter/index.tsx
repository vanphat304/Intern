import React from 'react';

const InternModalFooter = ({ item = [] }) => {
  return (
    <div className="flex items-end  p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
      {item.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};

export default InternModalFooter;
