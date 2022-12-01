import express from "express";
import { addVideo, updateVideo, deleteVideo, getVideo, addView, random, trend, sub, getByTag, search } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// CREATE A VIDEO
router.post("/", verifyToken, addVideo )

// UPDATE VIDEO
router.put("/:id", verifyToken, updateVideo )

// DELETE VIDEO
router.delete("/:id", verifyToken, deleteVideo )

// GET VIDEO
router.get("/find/:id",  getVideo )

// View Video
router.put("/view/:id", addView)

// Trend Videos
router.get("/trend", trend)

// Random
router.get("/random", random)

// Sub
router.get("/sub", verifyToken, sub)

// Tags
router.get("/tags", getByTag)

// Search
router.get("/search", search)


export default router ;