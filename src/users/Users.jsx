import React from "react";
import UserCard from "./UserCard";

const Users = ({ userData }) => {
  return (
    <div className="w-full">
      {userData.map((ele, index) => (
        <UserCard key={index} data={ele} />
      ))}
    </div>
  );
};

export default Users;
