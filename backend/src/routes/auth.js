import { Router } from "express";
import { syncFirebaseUser } from "../controllers/authController.js";
import { requireAuth } from "../middlewares/auth.js";

const router = Router();

router.post("/sync", requireAuth, syncFirebaseUser);

export default router;
