import { getLecturers, getLecturerById } from "../database.js";

export async function getAllLecturers(req, res) {
  try {
    const lecturers = await getLecturers();
    res.json(lecturers);
  } catch (error) {
    console.error("Error fetching lecturers:", error);
    res.status(500).json({ error: "Failed to fetch lecturers" });
  }
}

export async function getOneLecturerById(req, res) {
  const id = req.params.id;
  try {
    const lecturer = await getLecturerById(id);
    if (!lecturer) {
      res.status(404).json({ error: "Lecturer not found" });
    } else {
      res.json(lecturer);
    }
  } catch (error) {
    console.error("Error fetching lecturer by id:", error);
    res.status(500).json({ error: "Failed to fetch lecturer" });
  }
}
