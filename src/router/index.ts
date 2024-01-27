import { Router } from "express";
import { InventoryRoutes } from "../modules/inventory/inventory.route";
import { SalesRoutes } from "../modules/salesManagement/salesManagement.route";
import { UserRoutes } from "../modules/user/user.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
