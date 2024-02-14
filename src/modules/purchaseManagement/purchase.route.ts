import express from "express";

import validateRequest from "../../app/middlewares/validateRequest";

import auth from "../../app/middlewares/auth";
import { PurchaseValidation } from "./purchase.validation";
import { PurchaseControllers } from "./purchase.controller";

const router = express.Router();

router.get("/", auth(), PurchaseControllers.getPurchase);
router.post(
  "/create",
  auth(),
  validateRequest(PurchaseValidation.createPurchase),
  PurchaseControllers.createPurchase
);

export const PurchaseRoutes = router;
