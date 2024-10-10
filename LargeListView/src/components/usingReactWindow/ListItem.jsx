import React from "react";

const ListItem = ({ user }) => {
  return <div className="flex p-4 bg-blue-100 shadow-lg rounded-lg mb-4">
  <img
    src={user.image}
    alt={user.name}
    className="w-40 h-36 pt-1 pl-1 object-cover rounded-2xl border border-gray-200"
  />
  <div className="flex items-center">
    <div className="ml-10">
      <h2 className="text-xl font-bold text-gray-800 mb-1">{user.name}</h2>
      <div className="flex gap-4">
        <span className="flex gap-1">
          <p className="">Age:</p>
          <p className="text-gray-600">{user.age}</p>
        </span>

        <span className="flex gap-1">
          <p className="">Favorite Place: </p>
          <p className="text-gray-600">{user.favoritePlace}</p>
        </span>
        {/* <p className="text-gray-600">Age: {user.age}</p> */}
        {/* <p className="text-gray-600">Favorite Place: {user.favoritePlace}</p> */}
      </div>

      <hr className="border-t-4 border-gray-300 my-6" />
      <div>
        <span>
          <p className="text-sm font-bold text-gray-800 mb-1">
            User description :
          </p>
          <p>{user.des}</p>
        </span>
      </div>
    </div>
  </div>
</div>
};

export default ListItem;
