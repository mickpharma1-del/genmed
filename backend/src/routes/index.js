import { Router } from "express";
import authRoutes from "./auth.js";
import productRoutes from "./products.js";
import orderRoutes from "./orders.js";
import adminRoutes from "./admin.js";

const router = Router();

router.get("/health", (req, res) => {
  res.json({ ok: true, service: "supergenkart-api" });
});

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/admin", adminRoutes);

export default router;
