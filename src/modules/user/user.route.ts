import express from "express";
import { USerControllers } from "./user.controller";
import validateRequest from "../../app/middlewares/validateRequest";
import { UserValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/registration",
  validateRequest(UserValidation.userRegisterValidation),
  USerControllers.registerUser
);
router.post(
  "/login",
  validateRequest(UserValidation.userLoginValidation),
  USerControllers.loginUser
);

export const UserRoutes = router;
