import React from "react";

const TweetCard = ({ data }) => {
  console.log("------------");

  let tweet = data?.content?.itemContent?.tweet_results?.result?.legacy;

  // let picture = data?.content?.itemContent?.tweet_results?.result;

  console.log(tweet);

  if (tweet?.full_text === undefined) return <></>;
  return (
    <div className="p-5 m-5 spapce-y-2 shadow-lg w-2/3 m-auto">
      <p className="font-bold">{tweet?.full_text}</p>
      <p>Reply Count - {tweet?.reply_count}</p>
      <p>Created At - {tweet?.created_at}</p>
    </div>
  );
};

export default TweetCard;
