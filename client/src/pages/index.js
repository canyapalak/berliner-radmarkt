import Link from "next/link";
import CarouselComponent from "../components/CarouselComponent";

function Home() {
  return (
    <div className="md:px-26 lg:px-40 dark:text-neutral-200 transition-colors duration-500">
      <div className="text-4xl font-bold text-center mb-[0.5%] ">
        <p>
          schnell<span className="text-red-600 text-5xl ">.</span>sicher
          <span className="text-red-600 text-5xl]">.</span>kostenlos
        </p>
      </div>
      <div className="text-center text-lg mb-[0.5%]">
        <p>
          Beste Plattform um gebrauchte Fahrräder in Berlin zu verkaufen und zu
          kaufen. Willkommen auf dem 'Berliner Radmarkt'.
        </p>
      </div>
      <div className="gap-10 flex justify-center mb-[2%]">
        <p
          className="text-center bg-gradient-to-b from-amber-300 to-amber-500 inline-block w-36 p-2 text-lg 
            rounded-md cursor-pointer hover:bg-gradient-to-b hover:from-amber-200 hover:to-amber-400 shadow-md dark:text-black"
        >
          Jetzt Verkaufen
        </p>
        <Link href="/bikes">
          <p
            to="/bikes"
            className="text-center bg-gradient-to-b from-amber-300 to-amber-500 inline-block w-36 p-2  text-lg 
          rounded-md cursor-pointer hover:bg-gradient-to-b hover:from-amber-200 hover:to-amber-400 shadow-md dark:text-black"
          >
            Jetzt Suchen
          </p>
        </Link>
      </div>

      <CarouselComponent />
    </div>
  );
}

export default Home;
