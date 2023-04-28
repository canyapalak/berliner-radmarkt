import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { RiMessage3Line } from "react-icons/ri";
import { FaRegStar, FaStar } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { BiTimeFive } from "react-icons/bi";
import { TbCurrencyEuro } from "react-icons/tb";
import useConvertDate from "../hooks/useConvertDate";

export default function BikeDetails() {
  const [oneBike, setOneBike] = useState("");
  const [error, setError] = useState();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const convertDate = useConvertDate();

  console.log("_id", id);

  function handleFavorite() {
    setIsToggled(!isToggled);
  }

  useEffect(() => {
    const fetchBikeById = async () => {
      try {
        if (!id) return;
        const urlFetchBikeById = `http://localhost:5000/api/bikes/${id}`;
        const response = await fetch(urlFetchBikeById);
        console.log("response status: ", response.status);
        const results = await response.json();
        setOneBike(results.requestedId[0]);
      } catch (error) {
        // console.log("error", error);
        setError(error);
      }
    };

    fetchBikeById();
  }, [id]);

  console.log("oneBike :>> ", oneBike);

  const handlePrevClick = () => {
    setPhotoIndex((prevIndex) =>
      prevIndex === 0 ? oneBike.photos.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setPhotoIndex((prevIndex) =>
      prevIndex === oneBike.photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-8/12  mx-auto flex flex-col gap-2">
      <div className="w-2/3 relative border-2 border-neutral-400 border-opacity-30 rounded-sm shadow-md mx-auto">
        <Image
          src={oneBike.photos?.[photoIndex]}
          alt={`Photo ${photoIndex}`}
          width={1500}
          height={1000}
          layout="responsive"
          className="relative"
        />
        <span
          className="flex flex-row gap-1 absolute bottom-2 right-0 mr-2 bg-gray-800 
          bg-opacity-80 rounded-sm px-2 py-1 text-white w-16"
        >
          <MdOutlinePhotoCamera className="my-auto" />
          <p className="text-sm mt-0.5">{`${photoIndex + 1}/${
            oneBike.photos?.length
          }`}</p>
        </span>
        <div className="absolute inset-y-1/2 left-0">
          <button
            onClick={handlePrevClick}
            className="bg-gray-800 bg-opacity-80 hover:bg-opacity-60 text-white font-bold py-2 px-2 rounded-r-sm"
          >
            <AiOutlineCaretLeft className="text-2xl" />
          </button>
        </div>
        <div className="absolute inset-y-1/2 right-0">
          <button
            onClick={handleNextClick}
            className="bg-gray-800 bg-opacity-80 hover:bg-opacity-60 text-white font-bold py-2 px-2 rounded-l-sm"
          >
            <AiOutlineCaretRight className="text-2xl" />
          </button>
        </div>
      </div>

      <div
        className="flex flex-col text-center mx-auto gap-2 w-8/12 p-2 border-2 border-neutral-400
        border-opacity-30 rounded-sm shadow-md text-sm 2xl:text-base"
      >
        <div
          className="flex flex-row justify-between gap-1 bg-neutral-200 rounded-md px-2 pt-3
           border-gray-300 border-[1px] shadow-md "
        >
          <span className="flex flex-row gap-1 mb-2">
            <GrLocation className="mt-0.5" />
            <p className="text-left ">{oneBike.district}</p>
          </span>
          <span className="flex flex-row gap-1">
            <BiTimeFive className="mt-0.5" />
            <p className="text-left ">{convertDate(oneBike.postTime)}</p>
          </span>
        </div>
        <div className="flex flex-row justify-between">
          <div
            className="flex flex-row gap-1 justify-center bg-lime-300 rounded-md px-2 py-1
             border-gray-300 border-[1px] shadow-md cursor-pointer hover:bg-lime-200"
          >
            <RiMessage3Line className="text-lg mt-1" />
            <p className="pt-1">Nachricht schreiben</p>
          </div>
          <div
            className="flex flex-row gap-1 justify-center bg-orange-300 rounded-md px-2 py-1
             border-gray-300 border-[1px] shadow-md cursor-pointer hover:bg-orange-200"
            onClick={handleFavorite}
          >
            {!isToggled ? (
              <span className="flex flex-row gap-1">
                <FaRegStar className="text-lg mt-1" />
                <p className="pt-1">Anzeige folgen</p>
              </span>
            ) : (
              <span className="flex flex-row gap-1">
                <FaStar className="text-lg mt-1" />
                <p className="pt-1">Anzeige entfolgen</p>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
