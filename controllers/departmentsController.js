import { getDepartments, getDepartmentById } from "../database.js";

export async function getAllDepartments(req, res) {
  try {
    const departments = await getDepartments();
    res.json(departments);
  } catch (error) {
    console.error("Error fetching departments:", error);
    res.status(500).json({ error: "Failed to fetch departments" });
  }
}

export async function getOneDepartmentById(req, res) {
  const id = req.params.id;
  try {
    const department = await getDepartmentById(id);
    if (!department) {
      res.status(404).json({ error: "Department not found" });
    } else {
      res.json(department);
    }
  } catch (error) {
    console.error("Error fetching department by id:", error);
    res.status(500).json({ error: "Failed to fetch department" });
  }
}
