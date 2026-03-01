import { Router } from "express";
import { dashboardSummary } from "../controllers/adminController.js";
import { requireAuth, requireRole } from "../middlewares/auth.js";

const router = Router();

router.get("/dashboard", requireAuth, requireRole("admin"), dashboardSummary);

export default router;
