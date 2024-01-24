import { TInventory } from "./inventory.interface";
import InventoryModel from "./inventory.model";

const createInventoryDB = async (payload: TInventory) => {
  const result = await InventoryModel.create(payload);
  return result;
};

const getInventoryDB = async (query: Record<string, unknown>) => {
  let queryObj = { ...query };
  const result = await InventoryModel.find();
  return result;
};

const updateInventoryDB = async () => {
  return null;
};

const deleteInventoryDB = async () => {
  return null;
};

export const InventoryServices = {
  createInventoryDB,
  getInventoryDB,
  updateInventoryDB,
  deleteInventoryDB,
};
