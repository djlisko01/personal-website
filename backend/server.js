import express from "express";
import cors from "cors";
import userInfo from "./api/info.route.js";

const app = express();

// Allow server to read and accept JSON request in the request's body
app.use(express.json());
// Allows front end to communicate w/ the server.
app.use(cors());

/******* Main Routes *******/
app.use("/api", userInfo);

app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

export default app;
