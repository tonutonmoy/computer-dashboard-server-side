import { TInventory } from "./inventory.interface";
import InventoryModel from "./inventory.model";

const createInventoryDB = async (payload: TInventory) => {
  const result = await InventoryModel.create(payload);
  return result;
};

const getInventoryDB = async (query: Record<string, unknown>) => {
  console.log(query, "ki");

  const query2 = {} as any;

  if (Number(query?.price) > 0) {
    query2["price"] = { $lt: Number(query?.price) };
  }
  if (query?.compatibilityAndBrand) {
    const regex = new RegExp(query?.compatibilityAndBrand as string, "i");

    query2["$or"] = [
      { compatibility: { $regex: regex } },
      { brand: { $regex: regex } },
    ];
  }

  if (query?.category) {
    query2["category"] = { $regex: new RegExp(query?.category as string, "i") };
  }

  if (query?.interfaceValue) {
    query2["interface"] = {
      $regex: new RegExp(query?.interfaceValue as string, "i"),
    }; // Case-sensitive regex
  }
  if (query?.condition) {
    query2["condition"] = {
      $regex: new RegExp(query?.condition as string, "i"),
    }; // Case-sensitive regex
  }
  if (query?.capacity) {
    query2["capacity"] = { $regex: new RegExp(query?.capacity as string, "i") }; // Case-sensitive regex
  }
  if (query?.color) {
    query2["color"] = { $regex: new RegExp(query?.color as string, "i") }; // Case-sensitive regex
  }

  console.log(query2);
  const result = await InventoryModel.find(query2);
  return result;
};

const getSingleInventoryDB = async (id: string | undefined) => {
  console.log(id, "singleID");
  const result = await InventoryModel.findOne({ _id: id });
  return result;
};
const updateInventoryDB = async (id: string, payload: TInventory) => {
  const result = await InventoryModel.updateOne({ _id: id }, payload);

  return result;
};

const deleteInventoryDB = async () => {
  return null;
};

export const InventoryServices = {
  createInventoryDB,
  getInventoryDB,
  updateInventoryDB,
  deleteInventoryDB,
  getSingleInventoryDB,
};
