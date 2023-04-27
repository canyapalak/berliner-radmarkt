import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function BikeDetails() {
  const [oneBike, setOneBike] = useState("");
  const [error, setError] = useState();
  const router = useRouter();
  const { _id } = router.query;

  useEffect(() => {
    const fetchBikeById = async () => {
      try {
        const urlFetchBikeById = `http://localhost:5000/api/bikes/${_id}`;
        const response = await fetch(urlFetchBikeById);
        const results = await response.json();
        console.log("response :>> ", response);

        setOneBike(results.requestedId[0]);
      } catch (error) {
        // console.log("error", error);
        setError(error);
      }
    };

    fetchBikeById();
  }, [_id]);

  return (
    <div className="w-1/3 bg-slate-400 border-1 rounded-md">
      <p>{oneBike?.title}</p>
    </div>
  );
}
