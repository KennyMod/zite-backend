import express from "express";
import {
  getAllCourses,
  getOneCourseById,
} from "../../controllers/coursesController.js";

const router = express.Router();

router.get("/", getAllCourses);
router.get("/:id", getOneCourseById);

export default router;
