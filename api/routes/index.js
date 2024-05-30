import express from "express";
import studentsRouter from "./students.js";
import coursesRouter from "./courses.js";
import departmentsRouter from "./departments.js";
import lecturersRouter from "./lecturers.js";
import feesRouter from "./fees.js";

const router = express.Router();

router.use("/students", studentsRouter);
router.use("/courses", coursesRouter);
router.use("/departments", departmentsRouter);
router.use("/lecturers", lecturersRouter);
router.use("/fees", feesRouter);

export default router;
