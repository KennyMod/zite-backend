import {
  getFees,
  getFeeById,
  updateFees,
  getStudentById,
} from "../database.js";

export async function getAllFees(req, res) {
  try {
    const fees = await getFees();
    res.json(fees);
  } catch (error) {
    console.error("Error fetching fees:", error);
    res.status(500).json({ error: "Failed to fetch fees" });
  }
}

export async function getOneFeeById(req, res) {
  const id = req.params.id;
  try {
    const fee = await getFeeById(id);
    if (!fee) {
      res.status(404).json({ error: "Fee not found" });
    } else {
      res.json(fee);
    }
  } catch (error) {
    console.error("Error fetching fee by id:", error);
    res.status(500).json({ error: "Failed to fetch fee" });
  }
}

export async function updateOneFees(req, res) {
  const studentId = req.params.studentId;
  const { amountPaid } = req.body;

  try {
    const fee = await getFeeById(studentId);
    if (!fee) {
      return res.status(404).send("Fee not found");
    }

    const student = await getStudentById(studentId);
    if (!student) {
      return res.status(404).send("Student not found");
    }

    const remainingAmount = fee.amount - amountPaid;
    if (remainingAmount < 0) {
      return res.status(400).send("Amount paid exceeds the total fee");
    }

    await updateFees(studentId, amountPaid);

    // If remaining amount is zero, mark paid as true
    let paid = fee.paid;
    if (remainingAmount === 0) {
      paid = true;
    }

    const response = {
      student: {
        id: student.id,
        name: `${student.firstName} ${student.lastName}`,
      },
      remainingAmount,
      paid,
      message: `Thank you for your payment. Your outstanding amount is now ${remainingAmount}.`,
    };
    res.status(200).json(response);
  } catch (error) {
    console.error("Error updating fees:", error);
    res.status(500).send("Error updating fees");
  }
}
