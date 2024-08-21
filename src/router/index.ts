import { Router } from "express";
import { InventoryRoutes } from "../modules/inventory/inventory.route";
import { SalesRoutes } from "../modules/salesManagement/salesManagement.route";
import { UserRoutes } from "../modules/user/user.route";
import { CouponRoutes } from "../modules/couponManagement/coupon.route";
import { PurchaseRoutes } from "../modules/purchaseManagement/purchase.route";
import { ServiceRoutes } from "../modules/serviceManagement/service.route";
import { ReviewRoutes } from "../modules/review/review.route";

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
  {
    path: "/purchase",
    route: PurchaseRoutes,
  },
  {
    path: "/service",
    route: ServiceRoutes,
  },
  {
    path: "/review",
    route: ReviewRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
