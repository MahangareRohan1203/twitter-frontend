import React, { useState } from "react";
import Users from "./Users";
import { useSearchUsers } from "../customHooks/useSearchUsers";
import { userData } from "../data/usersData";

const SearchCard = () => {
  const [input, setInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let data = useSearchUsers(input, setIsLoading, setError);
  console.log(data);
  const search = () => {
    setInput(searchInput);
  };

  return (
    <div className="m-4 ">
      <div>
        <img
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt="ERROR"
          className="w-40 block m-auto"
        />
        <h1 className="text-center text-3xl font-bold">
          Welcome to Twitter App
        </h1>
      </div>
      <div className="p-5 flex justify-center">
        <input
          className="border border-black p-2 rounded-lg mx-5"
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="John Doe"
        />
        <button
          className="bg-blue-500 text-white p-2 px-5 rounded-lg"
          onClick={search}
        >
          Search
        </button>
      </div>
      {isLoading ? <h1 className="text-center text-5xl">Loading</h1> : <></>}
      <div className="flex justify-center">
        {data === undefined || data.length == 0 ? (
          <></>
        ) : (
          <Users userData={data} />
        )}
      </div>
    </div>
  );
};

export default SearchCard;
