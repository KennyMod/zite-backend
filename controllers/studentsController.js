import {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../database.js";

export async function getAllStudents(req, res) {
  try {
    const students = await getStudents();
    res.json(students);
  } catch (error) {
    console.error("Error fetching students:", error);
    res.status(500).json({ error: "Failed to fetch students" });
  }
}

export async function getOneStudentById(req, res) {
  const id = req.params.id;
  try {
    const student = await getStudentById(id);
    if (!student) {
      res.status(404).json({ error: "Student not found" });
    } else {
      res.json(student);
    }
  } catch (error) {
    console.error("Error fetching student by id:", error);
    res.status(500).json({ error: "Failed to fetch student" });
  }
}

export async function createOneStudent(req, res) {
  const student = req.body;
  try {
    const newStudent = await createStudent(
      student.firstName,
      student.lastName,
      student.dob,
      student.metricNumber,
      student.department,
      student.course
    );
    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Error creating student:", error);
    res.status(500).json({ error: "Failed to create student" });
  }
}

export async function updateOneStudent(req, res) {
  const id = req.params.id;
  const student = req.body;
  try {
    const updatedRows = await updateStudent(id, student);
    if (updatedRows === 0) {
      res.status(404).json({ error: "Student not found" });
    } else {
      res.json({ success: true });
    }
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).json({ error: "Failed to update student" });
  }
}

export async function deleteOneStudent(req, res) {
  const id = req.params.id;
  try {
    const deletedRows = await deleteStudent(id);
    if (deletedRows === 0) {
      res.status(404).json({ error: "Student not found" });
    } else {
      res.json({ success: true });
    }
  } catch (error) {
    console.error("Error deleting student:", error);
    res.status(500).json({ error: "Failed to delete student" });
  }
}
