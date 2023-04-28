import Image from "next/image";
import BikeIcon from "../assets/bike-icon.png";

function Footer() {
  return (
    <div className="fixed bottom-0 bg-neutral-200 w-full h-8 flex flex-row justify-center gap-2 pt-1">
      <p className="text-center my-auto text-md text-gray-600">
        Berliner Radmarkt ® 2023
      </p>
      <span className="w-auto h-auto">
        <Image src={BikeIcon} alt="Bike Icon" width="20" height="20" />
      </span>
      <p className="my-auto">
        <a
          href="https://github.com/canyapalak"
          target="_blank"
          className="text-gray-600 hover:text-gray-400"
        >
          Can Yapalak
        </a>
      </p>
    </div>
  );
}

export default Footer;
