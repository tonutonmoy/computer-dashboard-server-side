import { Router } from "express";
import { InventoryRoutes } from "../modules/inventory/inventory.route";
import { SalesRoutes } from "../modules/salesManagement/salesManagement.route";
import { UserRoutes } from "../modules/user/user.route";
import { CouponRoutes } from "../modules/couponManagement/coupon.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/inventory",
    route: InventoryRoutes,
  },
  {
    path: "/sales",
    route: SalesRoutes,
  },
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/coupon",
    route: CouponRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
