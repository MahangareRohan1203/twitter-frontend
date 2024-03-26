import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = ({ data }) => {
  const navigate = useNavigate();

  const showTweets = () => {
    console.log("showing");
    navigate(`/users/${data?.id}/tweets`);
  };
  console.log(data);

  return (
    <div
      onClick={showTweets}
      className="shadow-2xl my-5 cursor-pointer w-4/12 mx-auto"
    >
      <div className="flex justify-stretch items-center p-5 space-x-5">
        <img
          src={data?.profile_image_url_https}
          alt="ERROR"
          className="rounded-[50%]"
        />
        <div className="py-2">
          <h3>{data?.name}</h3>
          <h4>{data?.screen_name}</h4>
          {data?.location ? <h6>Location: {data?.location}</h6> : <></>}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
