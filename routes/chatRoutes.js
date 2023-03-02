import express from "express";
import {
  accessChats,
  addToGroup,
  createGroupChat,
  fetchChats,
  removeFromGroup,
  renameGroup,
} from "../controllers/chatController.js";
import protect from "../middleware/auth.js";
const router = express.Router();

router.route("/").post(protect, accessChats);
router.route("/").get(protect, fetchChats);
router.route("/group").post(protect, createGroupChat);
router.route("/rename").put(protect, renameGroup);
router.route("/groupremove").put(protect, removeFromGroup);
router.route("/groupadd").put(protect, addToGroup);

export default router;
