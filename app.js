import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import config from "./config";
import userRoute from "./routes/users";
import authRoute from "./routes/auth";

// Initialize express app
const app = express();

// DB Config
const { MONGO_URI } = config;
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

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Chat application");
});

export default app;
