import userModel from "../models/userModel.js";
import { passwordEncryption } from "../utils/bcrypt.js";

//new user signup
const signup = async (req, res) => {
  console.log("req.body :>> ", req.body);
  try {
    const existingUser = await userModel.findOne({ email: req.body.email });
    const existingUserName = await userModel.findOne({
      userName: req.body.userName,
    });
    const email = req.body.email;
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const password = req.body.password;
    const currentDate = new Date();

    if (existingUser) {
      res.status(500).json({
        msg: "this email address is already in use",
      });
    } else if (req.body.userName === "undefined") {
      res.status(500).json({
        msg: "username can not be empty",
      });
    } else if (existingUserName) {
      res.status(500).json({
        msg: "this username is already in use",
      });
    } else if (!emailRegex.test(email)) {
      res.status(500).json({
        msg: "email address is invalid",
      });
    } else if (email === "undefined") {
      res.status(500).json({
        msg: "email address can not be empty",
      });
    } else if (password.length < 6) {
      res.status(500).json({
        msg: "password should be at least 6 characters",
      });
    } else {
      const hashedPassword = await passwordEncryption(req.body.password);
      console.log("hashedPassword", hashedPassword);

      const newUser = new userModel({
        userName: req.body.userName,
        email: req.body.email,
        password: hashedPassword,
        userPicture: req.body.userPicture,
        signupTime: currentDate,
        isAdmin: false,
      });

      try {
        const savedUser = await newUser.save();
        res.status(201).json({
          msg: "signup successful",
          user: {
            userName: savedUser.userName,
            email: savedUser.email,
            userPicture: savedUser.userPicture,
            signupTime: savedUser.signupTime,
            isAdmin: savedUser.isAdmin,
          },
        });
      } catch (error) {
        res.status(400).json({
          msg: "error during signup",
          error: error,
        });
      }
    }
  } catch (error) {
    console.log("error registering user :>>");
  }
};

export { signup };
