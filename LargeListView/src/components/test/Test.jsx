import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";
import { VariableSizeList as List } from "react-window";
import { useWindowResize } from "./useWindowResize";
// import summaryData from "../../db/testSummaryData";
import summaryData from "../../db/newsDB";
import { TestDataList } from "./TestDataList";
import NewsItemView from "../news/NewsItemView";
import NewsTest from "./NewsTest";

const Row = ({ data, index, setSize, windowWidth }) => {
  const rowRef = useRef();

  useEffect(() => {
    setSize(index, rowRef.current.getBoundingClientRect().height);
  }, [setSize, index, windowWidth]);

  return (
    <div ref={rowRef} className="flex justify-center px-8  box-border">
      <NewsTest news={data[index]} />
      {/* <TestDataList summaryData={data[index].summary} /> */}
      {/* <TestDataList summaryData={data[index]} /> */}
      <hr className="border-t-2 border-gray-300 my-4" />

      {/* {data[index].summary} */}
    </div>
  );
};

export const Test = () => {
  const listRef = useRef();
  const sizeMap = useRef({});
  const [windowWidth] = useWindowResize();

  // Set up sizes for each item dynamically
  const setSize = useCallback((index, size) => {
    sizeMap.current = { ...sizeMap.current, [index]: size };
    listRef.current.resetAfterIndex(index);
  }, []);

  // Get the size for each item
  const getSize = (index) => sizeMap.current[index] || 50;

  // Use memoization for your summary data
  const data = useMemo(() => summaryData, []);

  return (
    <div className="w-full">
      <h1 className="text-2xl my-4 font-bold text-center">
        {" "}
        Total data : {summaryData.length}
      </h1>

      <List
        ref={listRef}
        className="no-scrollbar"
        height={600} // List window height
        width={windowWidth} // Dynamic width based on window
        itemCount={data.length}
        itemSize={getSize} // Dynamic size of each item
        itemData={data} // Data passed to each item
      >
        {({ index, style, data }) => (
          <div style={style} className="overflow-hidden">
            <Row
              data={data}
              index={index}
              setSize={setSize}
              windowWidth={windowWidth}
            />
          </div>
        )}
      </List>
    </div>
  );
};
