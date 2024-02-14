import express from "express";

import validateRequest from "../../app/middlewares/validateRequest";

import auth from "../../app/middlewares/auth";
import { CouponControllers } from "./coupon.controller";
import { CouponValidation } from "./coupon.validation";

const router = express.Router();

router.get("/", auth(), CouponControllers.getCoupon);
router.get("/single/:code", auth(), CouponControllers.getSingleCoupon);

router.post(
  "/create",
  auth(),
  validateRequest(CouponValidation.createCoupon),
  CouponControllers.createCoupon
);

router.delete("/delete/:id", auth(), CouponControllers.deleteCoupon);

export const CouponRoutes = router;
