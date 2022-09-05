import express from "express";
import { userLogin, createUser } from "../dao/userDAO.js";
const router = express.Router(); // Get access to the express router.
const LOGIN_COLLECTION = "user_login";

router.route("/user/login").post(async (req, res) => {
  console.log("Logging In...");

  let data = await userLogin(LOGIN_COLLECTION, req.body);

  if (data) {
    data["isUsername"] = true;

    res.send(data);
  } else {
    res.send({ isUsername: false });
  }
});

router.route("/user/create").post(async (req, res) => {
  console.log("Creating User...");
  let results = { userCreated: false, passwordMatch: false };

  const userCreated = await createUser(LOGIN_COLLECTION, req.body);
  results["userCreated"] = userCreated;
  res.send(results);
});
export default router;
