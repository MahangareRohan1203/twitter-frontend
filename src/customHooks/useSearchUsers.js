import { useEffect, useState } from "react";
import { BASE_URL, DEPLOYED_BASE_URL } from "../data/constants";
import { userData } from "../data/usersData";

export const useSearchUsers = (input, setIsLoading, setError) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setData([]);
      try {
        let response = await fetchSearchInput(input);
        setData(response.users);

      } catch (error) {
        setError(error);
        alert(error.message);
        // setData(userData.users);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);
  return data;
};

const fetchSearchInput = async (input) => {
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
    
    let response = await fetch(`${BASE_URL}?name=${input}`, requestOptions);
    // let response = await fetch(BASE_URL);
    console.log("called-2", response);
    if (response.status !== 200) {
      throw new Error("Status Code: " + response.status);
    }
    return await response.json();
  } catch (error) {
    throw new Error("Error fetching data: " + error.message);
  }
};
