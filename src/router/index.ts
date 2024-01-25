import { Router } from "express";
import { InventoryRoutes } from "../modules/inventory/inventory.route";
import { SalesRoutes } from "../modules/salesManagement/salesManagement.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
