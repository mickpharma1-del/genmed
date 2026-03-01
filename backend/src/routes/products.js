import { Router } from "express";
import { createProduct, listProducts } from "../controllers/productController.js";
import { requireAuth, requireRole } from "../middlewares/auth.js";

const router = Router();

router.get("/", listProducts);
router.post("/", requireAuth, requireRole("admin"), createProduct);

export default router;
