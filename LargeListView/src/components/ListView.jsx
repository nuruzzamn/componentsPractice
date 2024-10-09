import React from "react";
import listData from "../db/db";
import ListItem from "./ListItem";

const ListView = () => {
  console.log("data", listData.length);
  return (
    <div className="w-fit mx-auto mt-8 px-24">
      <h1 className="text-2xl mb-8 ml-10 font-bold text-center">
        Total user List {listData.length}
      </h1>
      {listData.map((user, index) => (
        <ListItem key={index} user={user} />
      ))}
    </div>
  );
};

export default ListView;
