const Student = require('../models/studentModel');

// Get all students
const getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

// Add new student
const addStudent = async (req, res) => {
  const { name, rollNo, class: studentClass } = req.body;
  const student = new Student({ name, rollNo, class: studentClass });
  await student.save();
  res.status(201).json(student);
};

// Update student
const updateStudent = async (req, res) => {
  const { id } = req.params;
  const updated = await Student.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

// Delete student
const deleteStudent = async (req, res) => {
  const { id } = req.params;
  await Student.findByIdAndDelete(id);
  res.json({ message: 'Student deleted successfully' });
};

module.exports = {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent
};
