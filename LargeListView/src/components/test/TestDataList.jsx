import React from "react";
export const TestDataList = ({ summaryData }) => {
  console.log("test data list", summaryData);
  return (
    <>
      <div className="p-4 bg-gray-100 shadow-lg rounded-lg">
        <h1>{summaryData}</h1>
      </div>

      {/* <hr className="border-t-4 border-gray-800 my-4" /> */}
    </>
  );
};
