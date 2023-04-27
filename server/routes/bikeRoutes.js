import express from "express";
import { getAllBikes, getBikebyId } from "../controllers/bikeController.js";
const router = express.Router();

// const router = express.Router();

router.get("/all", getAllBikes);
router.get("/:_id", getBikebyId);

export default router;
