import Link from "next/link";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiError } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

function SignUpPage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [newUser, setNewUser] = useState({});
  const [isImageFormatWrong, setisImageFormatWrong] = useState(false);
  const [isSignUpSuccessful, setIsSignUpSuccessful] = useState(false);
  const [isMailInUse, setisMailInUse] = useState(false);
  const [isUserNameEmpty, setisUserNameEmpty] = useState(false);
  const [isUserNameInUse, setIsUserNameInUse] = useState(false);
  const [isMailInvalid, setIsMailInvalid] = useState(false);
  const [isPasswordShort, setIsPasswordShort] = useState(false);
  const [isUploadSuccessful, setIsUploadSuccessful] = useState(false);
  const [isUploadFail, setIsUploadFail] = useState(false);
  const [isFetchFail, setIsFetchFail] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const AvatarPlaceholder =
    "https://res.cloudinary.com/djlyhp6vr/image/upload/v1676284633/bird-encounters/avatar-placeholder_yh3ock.png";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleAttachPicture = (e) => {
    e.preventDefault();
    console.log("e.target :>> ", e.target.files[0]);
    setSelectedFile(e.target.files[0]);
    console.log("selectedFile", selectedFile);
  };

  const handleInputChange = (e) => {
    console.log("e.target.name, e.target.value", e.target.name, e.target.value);
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  // add image for account
  const handleSubmitPicture = async (e) => {
    setIsUploadSuccessful(false);
    setIsUploadFail(false);

    // File format validation
    const allowedFormats = ["jpg", "jpeg", "png"];
    const fileFormat = selectedFile.name.split(".").pop().toLowerCase();
    if (!allowedFormats.includes(fileFormat)) {
      setisImageFormatWrong(true);
      return;
    }

    const formdata = new FormData();
    formdata.append("image", selectedFile);

    console.log("formData: ", formdata);

    const requestOptions = {
      method: "POST",
      body: formdata,
    };

    try {
      const response = await fetch(
        `http://localhost:5000/api/users/imageUpload`,
        requestOptions
      );
      const result = await response.json();
      console.log("result", result);
      setNewUser({ ...newUser, userPicture: result.imageUrl });
      if (result.msg === "image upload ok") {
        setIsUploadSuccessful(true);
        setisImageFormatWrong(false);
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  //create new account
  const handleSignUp = async () => {
    setIsSignUpSuccessful(false);
    setIsUserNameInUse(false);
    setisMailInUse(false);
    setIsMailInvalid(false);
    setIsPasswordShort(false);
    setIsFetchFail(false);

    console.log("newUser :>> ", newUser);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    const urlencoded = new URLSearchParams();
    urlencoded.append("password", newUser.password);
    urlencoded.append("email", newUser.email);
    urlencoded.append("userName", newUser.userName);
    urlencoded.append(
      "userPicture",
      newUser.userPicture ? newUser.userPicture : AvatarPlaceholder
    );

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch(`http://localhost:5000/api/users/signup`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.msg === "signup successful") {
          setIsSignUpSuccessful(true);
        }
        if (result.msg === "this username is already in use") {
          setIsUserNameInUse(true);
        }
        if (result.msg === "this email address is already in use") {
          setisMailInUse(true);
        }
        if (result.msg === "email address is invalid") {
          setIsMailInvalid(true);
        }
        if (result.msg === "password should be at least 6 characters") {
          setIsPasswordShort(true);
        }
        if (result.msg === "username can not be empty") {
          setisUserNameEmpty(true);
        }
        if (result.msg === "error during signup") {
          setIsFetchFail(true);
        }
      })
      .catch((error) => {
        console.log("error", error);
        setIsFetchFail(true);
      });
  };

  return (
    <div
      className="w-2/5 mx-auto flex flex-col gap-2 border-2 border-neutral-400 
    border-opacity-30 rounded-sm shadow-md py-2 px-4 mt-20 dark:text-neutral-200 transition-colors duration-500"
    >
      <p className="text-center font-extrabold text-lg mb-5">Registrieren</p>

      <span className="flex flex-row gap-2 items-center">
        <p className="">Nutzername*:</p>
        <input
          className="w-64 border-2 border-neutral-400 
               border-opacity-30 rounded-md px-2 p-1 ml-6 dark:text-black"
          type="text"
          name="userName"
          placeholder="Nutzername"
          onChange={handleInputChange}
        ></input>
      </span>

      <span className="flex flex-row gap-2 items-center">
        <p>E-Mail-Adresse*:</p>
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
            border-opacity-30 rounded-md px-2 py-1 ml-[52px] dark:text-black"
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

      <span className="flex flex-row gap-3 items-center">
        <p className="mt-1">Profilbild:</p>
        <input
          className="w-64 border-2 border-neutral-400 
               border-opacity-30 rounded-md h-10 ml-12"
          type="file"
          name="userPicture"
          id="upload-image"
          onChange={handleAttachPicture}
        ></input>
        <button
          className={`text-center bg-gradient-to-b from-amber-300 to-amber-500 inline-block w-28 h-8 mt-1 pt-[5px] 
  rounded-md hover:bg-gradient-to-b hover:from-amber-200 hover:to-amber-400 shadow-md dark:text-black cursor-pointer ${
    selectedFile === null || typeof selectedFile === "undefined"
      ? "pointer-events-none opacity-70"
      : ""
  }`}
          onClick={handleSubmitPicture}
          id="upload-button"
        >
          Hochladen
        </button>
      </span>
      <p className="italic text-gray-600 dark:text-yellow-100">
        * Pflichtfelder
      </p>
      {isImageFormatWrong ? (
        <span className="flex flex-row items-center">
          <BiError className="text-rose-700 text-xs mr-1 mb-0.5" />
          <p className="text-rose-700 text-sm ">
            Die Bilddatei muss im Format ".jpg", ".jpeg" oder ".png" sein.
          </p>
        </span>
      ) : null}
      {isUploadSuccessful ? (
        <span className="flex flex-row items-center">
          <TiTick className="text-lime-700 text-xs mr-1 mb-0.5" />
          <p className="text-lime-700 text-sm">Hochladen erfolgreich.</p>
        </span>
      ) : null}

      <button
        className="flex flex-row gap-1 justify-center bg-gradient-to-b from-amber-300 to-amber-500 
              hover:bg-gradient-to-b hover:from-amber-200 hover:to-amber-400 rounded-md py-1 shadow-md 
              cursor-pointer w-48 mx-auto mb-3 mt-3 pt-1.5 dark:text-black"
        isSuccess={isUploadSuccessful}
        isFailure={isUploadFail}
        successMsg="You have successfully uploaded your picture."
        errorMsg="Please upload a jpg, jpeg or png file"
        onClick={handleSignUp}
      >
        Registrieren
      </button>

      {/* <Modal show={showModal} className="signup-modal">
        <Modal.Body>
          {isSignUpSuccessful && (
            <p>You have successfully signed up. Please log in.</p>
          )}
          {isMailInUse && (
            <p id="error-message">
              This e-mail address is in use. Try another one.
            </p>
          )}
          {isUserNameInUse && (
            <p id="error-message">
              This username is in use. Username should be unique.
            </p>
          )}
          {isUserNameEmpty && <p id="error-message">Please type a username.</p>}
          {isMailInvalid && (
            <p id="error-message">
              E-mail address is invalid. Please check it.
            </p>
          )}
          {isPasswordShort && (
            <p id="error-message">Password should be at least 6 characters.</p>
          )}
          {isFetchFail && (
            <p id="error-message">Something went wrong. Please try again.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          {isSignUpSuccessful && (
            <Button
              variant="primary"
              className="signup-modal-button"
              onClick={() => redirectTo("/login")}
            >
              Close
            </Button>
          )}
          {isMailInUse ||
          isUserNameInUse ||
          isMailInvalid ||
          isPasswordShort ||
          isUserNameEmpty ||
          isFetchFail ? (
            <Button variant="primary" className="signup-modal-button">
              Close
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal> */}

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
