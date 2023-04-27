import React from "react";

function useConvertDateAndTime() {
  const convertTime = (dateAndTime) => {
    const date = new Date(dateAndTime).toLocaleDateString();
    const time = new Date(dateAndTime).toLocaleTimeString();
    return (
      <>
        {date} {time}
      </>
    );
  };
  return convertTime;
}

export default useConvertDateAndTime;
