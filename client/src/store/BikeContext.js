import React, { createContext, useState, useEffect } from "react";

export const BikeData = createContext(null);

function BikeContext({ children }) {
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
    <BikeData.Provider value={{ bikes, bikesNumber, error }}>
      {children}
    </BikeData.Provider>
  );
}

export default BikeContext;
