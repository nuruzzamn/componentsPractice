import React from "react";
import ListItem from "./ListItem";
// import listData from "../../db/db";
import listData from "../../db/testDB";
import { FixedSizeList as List } from "react-window";
// import { VariableSizeList as List } from "react-window";

export const ListView = () => {
  console.log("list data", listData);

  /*
  const getItemSize = (index) => {
    // return a size for items[index]
    console.log("des length", listData[index].des.length);
    const desLength = listData[index].des.length;

    return desLength <= 250 ? 250 : desLength - 50 + 250;
  };
  */

  return (
    <div className="w-full mx-auto mt-8 px-24">
      <h1 className="text-2xl mb-8 ml-10 font-bold text-center">
        Total User List: {listData.length}
      </h1>
      <List
        height={600}
        itemCount={listData.length}
        // itemSize={getItemSize}
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
