// controllers/universityController.js
const University = require('../models/university');  // Import the model

// Sample data (This would normally come from a database)
const universities = [
  new University(1, 'Harvard University', 1),
  new University(2, 'Stanford University', 2),
  new University(3, 'MIT', 3),
  new University(4, 'University of Oxford', 4),
  new University(5, 'California Institute of Technology', 5),
];

// Controller function to get the list of universities
const getUniversities = (req, res) => {
  res.json(universities);
};

const postUniversities = (req, res) => {
  const { name, ranking } = req.body;

  // Check if both name and ranking are provided
  if (!name || !ranking) {
    return res.status(400).json({ message: "Name and ranking are required" });
  }

  // Create a new university object
  const newUniversity = new University(universities.length + 1, name, ranking);

  // Add the new university to the universities array
  universities.push(newUniversity);

  // Respond with the newly created university
  res.status(201).json(newUniversity);
};

module.exports = { getUniversities , postUniversities};
