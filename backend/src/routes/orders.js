import { Router } from "express";
import { createOrder, listMyOrders } from "../controllers/orderController.js";
import { requireAuth } from "../middlewares/auth.js";

const router = Router();

router.get("/my", requireAuth, listMyOrders);
router.post("/", requireAuth, createOrder);

export default router;
