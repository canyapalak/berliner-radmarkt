import express from "express";
import { login, signup } from "../controllers/userController.js";
import { uploadUserPicture } from "../controllers/mediaController.js";
import { multerUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/imageUpload", multerUpload.single("image"), uploadUserPicture);
router.post("/signup", signup);
router.post("/login", login);

export default router;
