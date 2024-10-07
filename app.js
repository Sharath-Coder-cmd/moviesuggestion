const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const movieRoutes = require("./Routes/movies"); // Import movie routes (includes search)
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(bodyparser.json());
app.use(cors());

// Use routes
app.use("/api/movies", movieRoutes);   // For movie-related requests, including search

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/movies")
  .then(() => { console.log("MongoDB connected successfully!") })
  .catch(err => console.log(err));

// Start the server
app.listen(PORT, () => console.log(`Server Running On ${PORT}`));
