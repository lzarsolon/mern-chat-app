import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express(); // Initialize express app
const db = process.env.MONGODB_URI;
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("MERN Chat App");
});

// Establish db connection
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
