import express from "express";
import { signup } from "../controllers/userController.js";
import { uploadUserPicture } from "../controllers/mediaController.js";
import { multerUpload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/imageUpload", multerUpload.single("image"), uploadUserPicture);
router.post("/signup", signup);

export default router;
