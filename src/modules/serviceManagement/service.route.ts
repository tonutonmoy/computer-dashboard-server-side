import express from "express";

import validateRequest from "../../app/middlewares/validateRequest";

import auth from "../../app/middlewares/auth";
import { ServiceControllers } from "./service.controller";
import { ServiceValidation } from "./service.validation";

const router = express.Router();

router.get("/", auth(), ServiceControllers.getService);
router.post(
  "/create",
  auth(),
  validateRequest(ServiceValidation.createService),
  ServiceControllers.createService
);

export const ServiceRoutes = router;
