import React from "react";
import newsData from "../../db/newsDB";
import NewsItemView from "./NewsItemView";
import { FixedSizeList as List } from "react-window";

export const NewsListView = () => {
  console.log("news data", newsData);
  return (
    <div className="w-full mx-auto mt-8 ">
      <h1 className="text-2xl mb-8 ml-10 font-bold text-center">
        Total News List Items {newsData.length}
      </h1>
      <div className=" mb-8 gap-10">
        {/* {newsData.map((news, index) => (
          <NewsItemView key={index} news={news} />
        ))} */}
        <List
          height={500}
          itemCount={newsData.length}
          // itemSize={getItemSize}
          itemSize={350}
          width="100%"
        >
          {({ index, style }) => (
            <div style={style} className="flex justify-center pl-12">
              <NewsItemView news={newsData[index]} />
            </div>
          )}
        </List>
      </div>
    </div>
  );
};
