// ContentHead.jsx
import React from 'react';

const ContentHead = ({ title, subtitle }) => {
  return (
    <div className="content-head bg-white p-3">
      <h1 className="text-sm font-semibold ">{title}</h1>
      {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
    </div>
  );
};

export default ContentHead;
