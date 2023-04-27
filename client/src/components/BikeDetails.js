import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { AiOutlineCaretRight } from "react-icons/ai";
import { MdOutlinePhotoCamera } from "react-icons/md";

export default function BikeDetails() {
  const [oneBike, setOneBike] = useState("");
  const [error, setError] = useState();
  const [photoIndex, setPhotoIndex] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  console.log("_id", id);

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
    <div className="w-7/12 border-2 border-neutral-400 border-opacity-30 rounded-sm shadow-md mx-auto">
      <div className="w-2/3 relative">
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
    </div>
  );
}
