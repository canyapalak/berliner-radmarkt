import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { RiMessage3Line } from "react-icons/ri";
import { FaRegStar, FaStar } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import useConvertDateAndTime from "@/hooks/useConvertDateAndTime";

export default function BikeDetails() {
  const [oneBike, setOneBike] = useState("");
  const [error, setError] = useState();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isToggled, setIsToggled] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const convertDateAndTime = useConvertDateAndTime();

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
    <div className="w-8/12  mx-auto flex flex-col gap-2 ">
      <div className="w-2/3 relative border-2 border-neutral-400 border-opacity-30 rounded-sm shadow-md mx-auto">
        <Image
          src={oneBike.photos?.[photoIndex]}
          alt={`Photo ${photoIndex}`}
          width={1500}
          height={1000}
          className="relative object-contain"
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
        className="flex flex-row w-8/12 mx-auto justify-between gap-1 rounded-sm px-2
           border-2 border-neutral-400 border-opacity-30 shadow-md "
      >
        <div className="flex flex-col">
          <span className="flex flex-row gap-1 pt-2.5">
            <BiTimeFive className="mt-0.5" />
            <p className="text-left">{convertDateAndTime(oneBike.postTime)}</p>
          </span>
          <span className="flex flex-row gap-1 mb-1 ">
            <HiOutlineLocationMarker className="mt-0.5" />
            <p className="text-left ">{oneBike.district}</p>
          </span>
        </div>
        <div className="flex flex-row gap-2 my-2">
          <p className="my-auto text-lg underline cursor-pointer">
            {oneBike.userName}
          </p>
          <Image
            src={oneBike.userPicture}
            alt="Avatar"
            width={50}
            height={50}
            className="rounded-full shadow-sm border-1 border-gray-400 border-opacity-30 border-[1px]"
          />
        </div>
      </div>

      <div
        className="flex flex-col text-center mx-auto gap-2 w-8/12 p-2 border-2
       border-neutral-400 border-opacity-30 rounded-sm shadow-md"
      >
        <div className="flex flex-col text-left">
          <div className="flex flex-row justify-around mb-2">
            <p className="font-extrabold text-lg">{oneBike.title}</p>
            <div
              className="justify-around bg-gradient-to-b from-amber-300 to-amber-400 
                hover:bg-gradient-to-b hover:from-amber-200 hover:to-amber-300 rounded-md px-2 py-1 shadow-md 
                cursor-pointer mr-0 ml-auto"
              onClick={handleFavorite}
            >
              {!isToggled ? (
                <span className="flex flex-row gap-1">
                  <FaRegStar className="mt-[1px] dark:text-black" />
                </span>
              ) : (
                <span className="flex flex-row gap-1">
                  <FaStar className="mt-[1px] dark:text-black" />
                </span>
              )}
            </div>
          </div>

          <span className="pt-1 px-1 rounded-sm bg-amber-400 mr-auto">
            <p className="font-bold text-lg dark:text-black">
              {oneBike.price + " €"}
            </p>
          </span>
          <span className="flex flex-row gap-1 mt-3 mb-1">
            <p className="font-bold text-gray-600 dark:text-yellow-100">Typ:</p>
            <p>{oneBike.type}</p>
          </span>
          <span className="flex flex-row gap-1 mb-1">
            <p className="font-bold text-gray-600 dark:text-yellow-100">Art:</p>
            <p>{oneBike.frame}</p>
          </span>

          <p className="font-bold text-gray-600 dark:text-yellow-100">
            Beschreibung:
          </p>
          <p>{oneBike.description}</p>
        </div>

        <div
          className="flex flex-row gap-1 justify-center bg-gradient-to-b from-amber-300 to-amber-500 
              hover:bg-gradient-to-b hover:from-amber-200 hover:to-amber-400 rounded-md py-0.5 shadow-md 
              cursor-pointer w-48 mx-auto mb-2"
        >
          <RiMessage3Line className="mt-[5px] dark:text-black" />
          <p className="pt-1 dark:text-black">Nachricht schreiben</p>
        </div>
      </div>
    </div>
  );
}
