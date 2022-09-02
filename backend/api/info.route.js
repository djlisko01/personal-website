import express from "express";
import { getUser } from "../dao/userDAO.js";
const router = express.Router(); // Get access to the express router.

router.route("/login").post(async (req, res) => {
  console.log("Logging In...");
  const { username, password } = req.body;
  getUser(username, password);
  res.send({ res: "Hello" });
});

export default router;
