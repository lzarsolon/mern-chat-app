import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config";

const { MONGO_URI } = config;

// Initialize express app
const app = express();

app.get("/", (req, res) => {
  res.send("MERN Chat App");
});

// CORS Middleware
app.use(cors());

// DB Config
const db = MONGO_URI;

// Connect to Mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

export default app;
