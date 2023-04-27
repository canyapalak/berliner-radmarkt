import { useContext } from "react";
import { BikeData } from "../store/BikeContext.js";
import { GrLocation } from "react-icons/gr";
import { BiTimeFive } from "react-icons/bi";
import { TbCurrencyEuro } from "react-icons/tb";
import useConvertDate from "../hooks/useConvertDate.js";

function BikeCards() {
  const { bikes, bikesNumber, error } = useContext(BikeData);
  const convertDate = useConvertDate();

  console.log("bikes :>> ", bikes);
  console.log("bikesNumber", bikesNumber);
  return (
    <div className="flex flex-row flex-wrap gap-5 justify-center">
      {bikes &&
        bikes.map((bike, index) => {
          return (
            <div
              key={index}
              className="border-2 border-neutral-400 border-opacity-30 rounded-sm shadow-md"
            >
              {bike.photos && bike.photos[0] && (
                <div className="w-[34vh] relative">
                  <img
                    src={bike.photos[0]}
                    alt="Photo"
                    className="rounded-t-sm"
                  />
                </div>
              )}
              <div className="bottom-9 left-1 pt-1 px-1 inline-block rounded-md bg-amber-400 relative">
                <span className="flex flex-row">
                  <p>{bike.price}</p>
                  <TbCurrencyEuro className="text-lg" />
                </span>
              </div>
              <span>
                <p className="px-2 py-2 font-extrabold mt-[-2rem]">
                  {bike.title.length > 30
                    ? `${bike.title.substr(0, 30)}...`
                    : bike.title}
                </p>
              </span>
              <div className="flex flex-col justify-between text-sm p-1 opacity-70">
                <span className="float-left flex flex-row gap-1">
                  <GrLocation />
                  <p>{bike.district}</p>
                </span>
                <span className="float-right flex flex-row gap-1">
                  <BiTimeFive />
                  <p>{convertDate(bike.postTime)}</p>
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default BikeCards;
