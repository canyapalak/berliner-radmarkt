import Image from "next/image";
import Logo from "../assets/app-logo.png";
import Moon from "../assets/moon.png";
import Sun from "../assets/sun.png";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../store/AuthContext";

function NavigationBar() {
  const [darkMode, setDarkMode] = useState(false);
  console.log("darkMode", darkMode);

  const { isToken, logOut } = useContext(AuthContext);
  console.log("isToken", isToken);

  useEffect(() => {}, [isToken]);

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

        <div className="flex flex-row gap-6 my-auto text-lg">
          <Link
            href="/bikes"
            to="/bikes"
            className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1"
          >
            Fahrräder
          </Link>
          <span className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1">
            <p>Verkaufen</p>
          </span>
          {isToken ? (
            <Link
              href="/"
              className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1"
            >
              Profil
            </Link>
          ) : (
            <Link
              href="/login"
              className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1"
            >
              Einloggen
            </Link>
          )}
          {isToken ? (
            <a
              href="/"
              onClick={logOut}
              className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1"
            >
              Ausloggen
            </a>
          ) : (
            <Link
              href="/signup"
              className="hover:bg-opacity-30 hover:bg-white rounded-md px-3 py-1"
            >
              Registrieren
            </Link>
          )}

          {!darkMode ? (
            <Image
              src={Moon}
              className="text-lg my-auto mb-2 cursor-pointer w-5"
              onClick={handleDarkMode}
            />
          ) : (
            <Image
              src={Sun}
              className="text-lg my-auto mb-2 cursor-pointer w-5"
              onClick={handleDarkMode}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default NavigationBar;
