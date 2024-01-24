import { Router } from "express";
import { InventoryRoutes } from "../modules/inventory/inventory.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/inventory",
    route: InventoryRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
