import express from "express";

import validateRequest from "../../app/middlewares/validateRequest";
import { SalesControllers } from "./salesManagement.controller";
import { SalesValidation } from "./salesManagement.validation";

const router = express.Router();

router.post(
  "/create",
  validateRequest(SalesValidation.createSales),
  SalesControllers.createSales
);

export const SalesRoutes = router;
