import express from "express";
import studentsRouter from "./api/routes/students.js";
import coursesRouter from "./api/routes/courses.js";
import departmentsRouter from "./api/routes/departments.js";
import lecturersRouter from "./api/routes/lecturers.js";
import feesRouter from "./api/routes/fees.js";

const app = express();

app.use(express.json());

// Mounting the routers
app.use("/students", studentsRouter);
app.use("/courses", coursesRouter);
app.use("/departments", departmentsRouter);
app.use("/lecturers", lecturersRouter);
app.use("/fees", feesRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(5020, () => {
  console.log("Server is running on port 5020");
});
