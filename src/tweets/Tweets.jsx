import React, { useState } from "react";
import TweetCard from "./TweetCard";
import { useLocation } from "react-router-dom";
import { useTweets } from "../customHooks/useTweets";

const Tweets = () => {
  const location = useLocation();

  let userId = location.pathname.substring(7);
  userId = userId.substring(0, userId.length - 7);
  console.log(userId);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  let tweets = useTweets(userId, setIsLoading, setError);
  // console.log(tweets);
  if (isLoading) {
    return (
      <h1 className="text-5xl text-center text-bold mt-28">Loading.....</h1>
    );
  }

  return (
    <div>
      {tweets.map((ele, index) => (
        <TweetCard key={index} data={ele} />
      ))}
    </div>
  );
};

export default Tweets;
