import express from "express";
import {
  getAllDepartments,
  getOneDepartmentById,
} from "../../controllers/departmentsController.js";

const router = express.Router();

router.get("/", getAllDepartments);
router.get("/:id", getOneDepartmentById);

export default router;
