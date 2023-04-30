import Link from "next/link";

function SignUpPage() {
  return (
    <div
      className="w-2/5 mx-auto flex flex-col gap-2 border-2 border-neutral-400 
    border-opacity-30 rounded-sm shadow-md py-2 px-4 mt-20"
    >
      <p className="text-center font-extrabold text-lg mb-5">Registrieren</p>

      <span className="flex flex-row gap-2 items-center">
        <p className="">Nutzername*:</p>
        <input
          className="w-64 border-2 border-neutral-400 
               border-opacity-30 rounded-md px-2 p-1 ml-6"
          type="text"
          name="userName"
          placeholder="Nutzername"
        ></input>
      </span>

      <span className="flex flex-row gap-2 items-center">
        <p>E-Mail-Adresse*:</p>
        <input
          className="w-64 border-2 border-neutral-400 
               border-opacity-30 rounded-md px-2 py-1 ml-[5px]"
          type="text"
          name="email"
          placeholder="E-Mail-Addresse"
        ></input>
      </span>

      <span className="flex flex-row gap-2 items-center">
        <p>Passwort*:</p>
        <input
          className="w-64 border-2 border-neutral-400 
               border-opacity-30 rounded-md px-2 py-1 ml-[45px]"
          type="text"
          name="password"
          placeholder="Passwort"
        ></input>
      </span>

      <span className="flex flex-row gap-3 items-center">
        <p className="mt-1">Profilbild:</p>
        <input
          className="w-64 border-2 border-neutral-400 
               border-opacity-30 rounded-md h-10 ml-12"
          type="file"
          name="userPicture"
        ></input>
        <p
          className="text-center bg-gradient-to-b from-amber-300 to-amber-500 inline-block w-28 h-8 mt-1 pt-[5px] 
          rounded-md cursor-pointer hover:bg-gradient-to-b hover:from-amber-200 hover:to-amber-400 shadow-md"
        >
          Hochladen
        </p>
      </span>
      <p className="italic text-gray-600 ">* Pflichtfelder</p>

      <p
        className="flex flex-row gap-1 justify-center bg-gradient-to-b from-amber-300 to-amber-500 
              hover:bg-gradient-to-b hover:from-amber-200 hover:to-amber-400 rounded-md py-1 shadow-md 
              cursor-pointer w-48 mx-auto mb-3 mt-3 pt-1.5"
      >
        Registrieren
      </p>
      <span className="flex flex-row gap-1 justify-center">
        <p>Haben Sie bereits ein Konto? Gehen Sie zu</p>
        <Link href="/login">
          <p className="cursor-pointer font-extrabold text-red-700 hover:text-red-500">
            Einloggen
          </p>
        </Link>
      </span>
    </div>
  );
}

export default SignUpPage;