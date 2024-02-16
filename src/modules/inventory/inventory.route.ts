import express from "express";
import { InventoryControllers } from "./inventory.controller";
import validateRequest from "../../app/middlewares/validateRequest";
import { InventoryValidation } from "./inventory.validation";
import auth from "../../app/middlewares/auth";
import { USER_ROLE } from "../user/user.constant";

const router = express.Router();

router.get(
  "/",
  auth(USER_ROLE.buyer, USER_ROLE.seller),
  InventoryControllers.getInventory
);
router.get(
  "/singleInventory/:id",
  auth(USER_ROLE.buyer, USER_ROLE.seller),
  InventoryControllers.getSingleInventory
);
router.post(
  "/create",
  auth(USER_ROLE.seller),
  validateRequest(InventoryValidation.createInventory),
  InventoryControllers.createInventory
);
router.put(
  "/update/:id",
  auth(USER_ROLE.seller),
  InventoryControllers.updateInventory
);
router.delete(
  "/delete",
  auth(USER_ROLE.seller),
  InventoryControllers.deleteInventory
);

export const InventoryRoutes = router;
