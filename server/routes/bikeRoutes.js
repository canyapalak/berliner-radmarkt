import express from "express";
import { getAllBikes } from "../controllers/bikeController.js";
const router = express.Router();

// const router = express.Router();

router.get("/all", getAllBikes);

export default router;
