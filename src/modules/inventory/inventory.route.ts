import express from "express";
import { InventoryControllers } from "./inventory.controller";
import validateRequest from "../../app/middlewares/validateRequest";
import { InventoryValidation } from "./inventory.validation";
import auth from "../../app/middlewares/auth";

const router = express.Router();

router.get("/", auth(), InventoryControllers.getInventory);
router.get(
  "/singleInventory/:id",
  auth(),
  InventoryControllers.getSingleInventory
);
router.post(
  "/create",
  auth(),
  validateRequest(InventoryValidation.createInventory),
  InventoryControllers.createInventory
);
router.put("/update/:id", auth(), InventoryControllers.updateInventory);
router.delete("/delete", auth(), InventoryControllers.deleteInventory);

export const InventoryRoutes = router;
