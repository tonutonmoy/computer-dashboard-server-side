import express from "express";
import { InventoryControllers } from "./inventory.controller";
import validateRequest from "../../app/middlewares/validateRequest";
import { InventoryValidation } from "./inventory.validation";

const router = express.Router();

router.get("/", InventoryControllers.getInventory);
router.post(
  "/create",
  validateRequest(InventoryValidation.createInventory),
  InventoryControllers.createInventory
);
router.post("/update", InventoryControllers.updateInventory);
router.post("/delete", InventoryControllers.deleteInventory);

export const InventoryRoutes = router;
