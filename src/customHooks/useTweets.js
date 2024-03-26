import { useEffect, useState } from "react";
import { BASE_URL } from "../data/constants";
import { tweetData } from "../data/tweets";

export const useTweets = (userId, setIsLoading, setError) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        let response = await fetchTweets(userId);
        if (response?.length >= 2) setData(response[2]?.entries);
      } catch (error) {
        setError(error);
        alert(error.message);
        if (tweetData?.length >= 2) {
          // setData(tweetData[2]?.entries);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  return data;
};

const fetchTweets = async (input) => {
  console.log("called");
  if (input === "") return [];
  try {
    const myHeaders = new Headers();
    myHeaders.append("clientId", "12");
    myHeaders.append("clientSecret", "12");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    let response = await fetch(
      `${BASE_URL}/${input}/tweets`,
      requestOptions
    );

    if (response.status !== 200) {
      throw new Error("Status Code: " + response.status);
    }
    return await response.json();
  } catch (error) {
    throw new Error("Error fetching data: " + error.message);
  }
};
