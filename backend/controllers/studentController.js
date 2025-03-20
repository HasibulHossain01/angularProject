const Student = require('../models/student');  // Import the model

// Sample data (This would normally come from a database)
const students = [
  new Student(1,'Hasib', 1434),
  new Student(2, 'Sabbir', 2324),
  new Student(3, 'Akash', 3234),
  new Student(4, 'Fahim', 4234),
  new Student(5, 'Sojol', 235),
];

// Controller function to get the list of students
const getStudents = (req, res) => {
  res.json(students);
};

const postStudents = (req, res) => {
  const { name, registration } = req.body;

  // Check if both name and registration are provided
  if (!name || !registration) {
    return res.status(400).json({ message: "Name and registration are required" });
  }

 
  const newStudent = new Student(students.length + 1, name, registration);

  students.push(newStudent);
  res.status(201).json(newStudent);
};

module.exports = { getStudents , postStudents};
