import React, { createContext, useState, useEffect } from "react";

export const BikeContext = createContext();

export const BikeContextProvider = (props) => {
  const [error, setError] = useState(null);
  const [bikes, setBikes] = useState(null);
  const [bikesNumber, setBikesNumber] = useState(null);

  useEffect(() => {
    const fetchAllBikes = async () => {
      try {
        const urlAllBikes = "http://localhost:5000/api/bikes/all";
        const response = await fetch(urlAllBikes);
        const results = await response.json();
        setBikes(results.allBikes);
        setBikesNumber(results.number);
      } catch (err) {
        console.log("error", err);
        setError(err);
      }
    };

    fetchAllBikes();
  }, []);

  return (
    <BikeContext.Provider value={{ bikes, bikesNumber, error }}>
      {props.children}
    </BikeContext.Provider>
  );
};
