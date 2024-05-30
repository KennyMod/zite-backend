import express from "express";
import {
  getAllFees,
  getOneFeeById,
  updateOneFees,
} from "../../controllers/feesController.js";

const router = express.Router();

router.get("/", getAllFees);
router.get("/:id", getOneFeeById);
router.put("/updateFees/:studentId", updateOneFees);

export default router;
