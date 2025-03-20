// routes/universityRoutes.js
const express = require('express');
const { getUniversities ,postUniversities} = require('../controllers/universityController'); // Import controller
const router = express.Router();

// Define the route to get the list of universities
router.get('/', getUniversities);
router.post('/' ,postUniversities )

module.exports = router;
