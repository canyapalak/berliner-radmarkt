import Image from "next/image";
import Logo from "../assets/app-logo.png";
import ProfileIcon from "../assets/profile.png";
import Link from "next/link";

function NavigationBar() {
  return (
    <>
      <div
        className="w-full h-16 bg-gradient-to-r from-amber-300 to-amber-500 flex flex-row 
      justify-between px-4 md:px-26 lg:px-40 mb-[2%]"
      >
        <Link href="/">
          <div className="w-32 my-auto pt-0.5">
            <Image src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className="flex flex-row gap-6 my-auto text-lg">
          <Link href="/bikes">
            <p
              to="/bikes"
              className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1"
            >
              Fahrräder
            </p>
          </Link>
          <span className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1">
            <p>Verkaufen</p>
          </span>
          <span className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1">
            <p>Einloggen</p>
          </span>
          <span className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1">
            <p>Registieren</p>
          </span>
          <span className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1.5">
            <Image src={ProfileIcon} alt="Profile" width={25} height={25} />
          </span>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
