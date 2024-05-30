import express from "express";
import {
  getAllLecturers,
  getOneLecturerById,
} from "../../controllers/lecturersController.js";

const router = express.Router();

router.get("/", getAllLecturers);
router.get("/:id", getOneLecturerById);

export default router;
