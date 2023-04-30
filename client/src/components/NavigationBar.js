import Image from "next/image";
import Logo from "../assets/app-logo.png";
import ProfileIcon from "../assets/profile.png";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";
import Link from "next/link";
import { useEffect, useState } from "react";

function NavigationBar() {
  const [darkMode, setDarkMode] = useState(false);
  console.log("darkMode", darkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

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

        {!darkMode ? (
          <Image
            src={Moon}
            className="text-lg ml-auto mr-14 my-auto mb-6 cursor-pointer w-5"
            onClick={handleDarkMode}
          />
        ) : (
          <Image
            src={Sun}
            className="text-lg ml-auto mr-14 my-auto mb-6 cursor-pointer w-5"
            onClick={handleDarkMode}
          />
        )}

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
          <Link href="/login">
            <p
              to="/login"
              className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1"
            >
              Einloggen
            </p>
          </Link>
          <Link href="/signup">
            <p
              to="/signup"
              className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1"
            >
              Registrieren
            </p>
          </Link>
          <span className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1.5">
            <Image src={ProfileIcon} alt="Profile" width={25} height={25} />
          </span>
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
