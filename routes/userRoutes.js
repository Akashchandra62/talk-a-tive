import express from "express";
const router = express.Router();
import {
  allUsers,
  authUser,
  registerUser,
} from "../controllers/userController.js";
import protect from "../middleware/auth.js";

router.route("/").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);

export default router;
