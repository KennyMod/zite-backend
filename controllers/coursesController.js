import { getCourses, getCourseById } from "../database.js";

export async function getAllCourses(req, res) {
  try {
    const courses = await getCourses();
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Failed to fetch courses" });
  }
}

export async function getOneCourseById(req, res) {
  const id = req.params.id;
  try {
    const course = await getCourseById(id);
    if (!course) {
      res.status(404).json({ error: "Course not found" });
    } else {
      res.json(course);
    }
  } catch (error) {
    console.error("Error fetching course by id:", error);
    res.status(500).json({ error: "Failed to fetch course" });
  }
}
