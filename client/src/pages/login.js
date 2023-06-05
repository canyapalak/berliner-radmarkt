import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../store/AuthContext.js";
import { useRouter } from "next/router.js";
import { BiError } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

function LoginPage() {
  const {
    currentUser,
    handleLogIn,
    handleInputChange,
    isEmailWrong,
    isPasswordWrong,
    isLogInSuccessful,
  } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const router = useRouter();

  return (
    <>
      {isLogInSuccessful ? (
        <div
          className="w-2/5 mx-auto flex flex-col gap-2 border-2 border-neutral-400 
    border-opacity-30 rounded-sm shadow-md py-2 px-4 mt-20 dark:text-neutral-200 transition-colors duration-500"
        >
          <span className="flex flex-col justify-center items-center">
            <TiTick className="w-8 h-8 text-lime-700 mb-2" />
            <p className="text-lime-700 text-center">
              Willkommen, {currentUser?.userName}. Sie haben sich erfolgreich
              angemeldet.
            </p>
            <Link href="/bikes">
              <p className="cursor-pointer font-extrabold text-red-700 hover:text-red-500">
                Fahrräder
              </p>
            </Link>
          </span>
        </div>
      ) : (
        <div
          className="w-2/5 mx-auto flex flex-col gap-2 border-2 border-neutral-400 
    border-opacity-30 rounded-sm shadow-md py-2 px-4 mt-20 dark:text-neutral-200 transition-colors duration-500"
        >
          <p className="text-center font-extrabold text-lg mb-5">Einloggen</p>

          <span className="flex flex-row gap-2 items-center">
            <p>E-Mail-Adresse:</p>
            <input
              className="w-64 border-2 border-neutral-400 
               border-opacity-30 rounded-md px-2 py-1 ml-[5px] dark:text-black"
              type="text"
              name="email"
              placeholder="E-Mail-Addresse"
              onChange={handleInputChange}
            ></input>
          </span>

          <span className="flex flex-row gap-2 items-center">
            <p>Passwort:</p>
            <div className="relative flex items-center">
              <input
                className="w-64 border-2 border-neutral-400 
            border-opacity-30 rounded-md px-2 py-1 ml-[45px] dark:text-black"
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Passwort"
                onChange={handleInputChange}
              />
              {showPassword ? (
                <AiOutlineEyeInvisible
                  className="absolute right-2 cursor-pointer dark:text-black"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <AiOutlineEye
                  className="absolute right-2 cursor-pointer dark:text-black"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
          </span>

          <button
            onClick={handleLogIn}
            className="flex flex-row gap-1 justify-center bg-gradient-to-b from-amber-300 to-amber-500 
              hover:bg-gradient-to-b hover:from-amber-200 hover:to-amber-400 rounded-md py-1 shadow-md 
              cursor-pointer w-48 mx-auto mb-3 mt-3 pt-1.5 dark:text-black"
          >
            Einloggen
          </button>
          <span className="flex flex-row gap-1 justify-center">
            <p>Haben Sie kein Konto? Gehen Sie zu</p>
            <Link href="/signup">
              <p className="cursor-pointer font-extrabold text-red-700 hover:text-red-500">
                Registrieren
              </p>
            </Link>
          </span>
        </div>
      )}
    </>
  );
}

export default LoginPage;
