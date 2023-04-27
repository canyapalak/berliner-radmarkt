import { useContext } from "react";
import { BikeData } from "../store/BikeContext.js";
import { GrLocation } from "react-icons/gr";
import { BiTimeFive } from "react-icons/bi";
import { TbCurrencyEuro } from "react-icons/tb";
import useConvertDate from "../hooks/useConvertDate.js";
import Link from "next/link.js";

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
            <Link
              key={index}
              href={`/bikes/${bike._id}`}
              className="border-2 border-neutral-400 border-opacity-30 rounded-sm shadow-md"
            >
              {bike.photos && bike.photos[0] && (
                <div className="w-[34vh] relative">
                  <div
                    className="absolute flex flex-row top-0 right-0 bg-white opacity-70 
                  rounded-l-sm text-sm gap-1 p-1"
                  >
                    <BiTimeFive className="mt-[1px]" />
                    <p>{convertDate(bike.postTime)}</p>
                  </div>
                  <img
                    src={bike.photos[0]}
                    alt="Photo"
                    className="rounded-t-sm"
                  />
                </div>
              )}
              <div className="bottom-9 float-right mr-2 pt-1 px-1 inline-block rounded-sm bg-amber-400 relative">
                <span className="flex flex-row">
                  <p>{bike.price}</p>
                  <TbCurrencyEuro className="text-lg" />
                </span>
              </div>
              <span>
                <p className="px-2 pt-2 font-extrabold">
                  {bike.title.length > 30
                    ? `${bike.title.substr(0, 30)}...`
                    : bike.title}
                </p>
              </span>
              <span className="float-left flex flex-row gap-1 text-sm p-1 opacity-70">
                <GrLocation />
                <p>{bike.district}</p>
              </span>
            </Link>
          );
        })}
    </div>
  );
}

export default BikeCards;
