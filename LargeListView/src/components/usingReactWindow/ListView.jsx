import React from "react";
import ListItem from "./ListItem";
import listData from "../../db/db";
import { FixedSizeList as List } from "react-window";

export const ListView = () => {
  console.log("list data", listData);
  return (
    <div className="w-full mx-auto mt-8 px-24">
      <h1 className="text-2xl mb-8 ml-10 font-bold text-center">
        Total User List: {listData.length}
      </h1>
      <List
        height={600}
        itemCount={listData.length}
        itemSize={300}
        width="100%"
      >
        {({ index, style }) => (
          <div style={style}>
            <ListItem user={listData[index]} />{" "}
          </div>
        )}
      </List>
    </div>
  );
};
