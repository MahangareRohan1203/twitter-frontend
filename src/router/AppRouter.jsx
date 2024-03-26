import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchCard from "../users/SearchCard";
import Tweets from "../tweets/Tweets";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SearchCard />}></Route>
        <Route path="/users/:userId/tweets" element={<Tweets />}></Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
