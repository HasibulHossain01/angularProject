// server.js
const express = require('express');
const cors = require('cors');
const universityRoutes = require('./routes/universityRoutes');  // Import university routes
const studentRoutes = require('./routes/studentRoutes');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/universities', universityRoutes);  
app.use('/api/students',studentRoutes)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
