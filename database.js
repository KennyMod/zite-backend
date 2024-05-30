import mysql from "mysql2";

import dotenv from "dotenv";

dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

async function getStudents() {
  const [rows] = await pool.query("SELECT * FROM students");
  return rows;
}

async function getStudentById(id) {
  const [rows] = await pool.query(`SELECT * FROM students WHERE id = ?`, [id]);
  return rows[0];
}

async function createStudent(
  firstName,
  lastName,
  dob,
  metricNumber,
  department,
  course
) {
  const result = await pool.query(
    `INSERT INTO students (firstName, lastName, dob, metricNumber, department, course) VALUES (?, ?, ?, ?, ?, ?)`,
    [firstName, lastName, dob, metricNumber, department, course]
  );
  const id = result[0].insertId;
  return getStudentById(id);
}

async function updateStudent(id, student) {
  const [result] = await pool.query("UPDATE students SET ? WHERE id = ?", [
    student,
    id,
  ]);
  return result.affectedRows;
}

async function deleteStudent(id) {
  const [result] = await pool.query("DELETE FROM students WHERE id = ?", id);
  return result.affectedRows;
}

// Courses functions
async function getCourses() {
  const [rows] = await pool.query("SELECT * FROM courses");
  return rows;
}

async function getCourseById(id) {
  const [rows] = await pool.query(`SELECT * FROM courses WHERE id = ?`, [id]);
  return rows[0];
}

// Departments functions
async function getDepartments() {
  const [rows] = await pool.query("SELECT * FROM departments");
  return rows;
}

async function getDepartmentById(id) {
  const [rows] = await pool.query(`SELECT * FROM departments WHERE id = ?`, [
    id,
  ]);
  return rows[0];
}

// Lecturers functions
async function getLecturers() {
  const [rows] = await pool.query("SELECT * FROM lecturers");
  return rows;
}

async function getLecturerById(id) {
  const [rows] = await pool.query(`SELECT * FROM lecturers WHERE id = ?`, [id]);
  return rows[0];
}

// Fees functions
async function getFees() {
  const [rows] = await pool.query("SELECT * FROM fees");
  return rows;
}

async function getFeeById(id) {
  const [rows] = await pool.query(`SELECT * FROM fees WHERE id = ?`, [id]);
  return rows[0];
}

async function updateFees(studentId, amountPaid) {
  await pool.query("UPDATE fees SET amountPaid = ? WHERE studentId = ?", [
    amountPaid,
    studentId,
  ]);
}

export {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  getCourses,
  getCourseById,
  getDepartments,
  getDepartmentById,
  getLecturers,
  getLecturerById,
  getFees,
  getFeeById,
  updateFees,
};
