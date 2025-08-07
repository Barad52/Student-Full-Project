const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const connectDB = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');
const logger = require("./middlewares/logger");


dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);


// Routes
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});