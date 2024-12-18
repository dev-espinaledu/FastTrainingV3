import React from 'react';

const WarningMessage = ({ message }) => {
  return (
    <div className="flex items-center bg-yellow-100 border  border-yellow-500 text-yellow-500 px-2  rounded-md mb-2" role="alert">
      <span className="inline-block text-yellow-500 mr-2">⚠️</span>
      <span>{message}</span>
    </div>
  );
};

export default WarningMessage;