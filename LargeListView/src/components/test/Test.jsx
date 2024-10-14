import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
} from "react";
import { VariableSizeList as List } from "react-window";
import { useWindowResize } from "./useWindowResize";
import summaryData from "../../db/testSummaryData";
import { TestDataList } from "./TestDataList";

// Utility to calculate the height of each item dynamically
const getMessageHeight = (text, width) => {
  const lineHeight = 20; // Adjust this based on your styling
  const baseHeight = 30; // Base height for padding
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  context.font = "100px Arial"; // Your message font style
  const words = text.split(" ");

  let line = "";
  let lines = 1;

  words.forEach((word) => {
    const testLine = line + word + " ";
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > width && line) {
      line = word + " ";
      lines++;
    } else {
      line = testLine;
    }
  });

  return baseHeight + lines * lineHeight;
};

const Row = ({ data, index, setSize, windowWidth }) => {
  const rowRef = useRef();

  useEffect(() => {
    setSize(index, rowRef.current.getBoundingClientRect().height);
  }, [setSize, index, windowWidth]);

  return (
    <div
      ref={rowRef}
      style={{
        padding: "1em",
        borderBottom: "1px solid #ccc",
        // backgroundColor: "red",
        boxSizing: "border-box",
      }}
    >
      <TestDataList summaryData={data[index].summary} />
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
    <div style={{ width: "100%", padding: "" }}>
      <h1 className="text-2xl my-4 font-bold text-center">
        {" "}
        Total data : {summaryData.length}
      </h1>

      <List
        ref={listRef}
        height={600} // List window height
        width={windowWidth} // Dynamic width based on window
        itemCount={data.length}
        itemSize={getSize} // Dynamic size of each item
        itemData={data} // Data passed to each item
      >
        {({ index, style, data }) => (
          <div style={style}>
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
