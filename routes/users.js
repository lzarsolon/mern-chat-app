import express from "express";
import User from "../models/User";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Users");
});

// Get user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
