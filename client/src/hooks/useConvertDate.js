import React from "react";

function useConvertDate() {
  const convertDate = (dateAndTime) => {
    const date = new Date(dateAndTime).toLocaleDateString();
    return <>{date}</>;
  };
  return convertDate;
}

export default useConvertDate;
