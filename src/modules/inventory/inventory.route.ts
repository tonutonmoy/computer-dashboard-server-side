import express from "express";
import { InventoryControllers } from "./inventory.controller";
import validateRequest from "../../app/middlewares/validateRequest";
import { InventoryValidation } from "./inventory.validation";

const router = express.Router();

router.get("/", InventoryControllers.getInventory);
router.get("/singleInventory/:id", InventoryControllers.getSingleInventory);
router.post(
  "/create",
  validateRequest(InventoryValidation.createInventory),
  InventoryControllers.createInventory
);
router.put("/update/:id", InventoryControllers.updateInventory);
router.post("/delete", InventoryControllers.deleteInventory);

export const InventoryRoutes = router;
