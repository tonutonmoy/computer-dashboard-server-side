import express from "express";

import validateRequest from "../../app/middlewares/validateRequest";
import { SalesControllers } from "./salesManagement.controller";
import { SalesValidation } from "./salesManagement.validation";
import auth from "../../app/middlewares/auth";

const router = express.Router();

router.get("/", auth(), SalesControllers.getSales);
router.post(
  "/create",
  auth(),
  validateRequest(SalesValidation.createSales),
  SalesControllers.createSales
);

export const SalesRoutes = router;
