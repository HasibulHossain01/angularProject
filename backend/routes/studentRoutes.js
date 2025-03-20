// routes/universityRoutes.js
const express = require('express');
const {getStudents, postStudents} = require("./../controllers/studentController.js")
const router = express.Router();

// Define the route to get the list of universities
router.get('/', getStudents);
router.post('/' ,postStudents )

module.exports = router;
