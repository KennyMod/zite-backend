import express from "express";
import {
  getAllStudents,
  getOneStudentById,
  createOneStudent,
  updateOneStudent,
  deleteOneStudent,
} from "../../controllers/studentsController.js";

const router = express.Router();

router.get("/", getAllStudents);
router.get("/:id", getOneStudentById);
router.post("/", createOneStudent);
router.put("/:id", updateOneStudent);
router.delete("/:id", deleteOneStudent);

export default router;
