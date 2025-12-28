import express from "express";
import { CreateTemple } from "../controllers/templeController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated,CreateTemple)

export default router;
