import { TInventory } from "./inventory.interface";
import InventoryModel from "./inventory.model";

const createInventoryDB = async (payload: TInventory) => {
  const result = await InventoryModel.create(payload);
  return result;
};

const getInventoryDB = async (query: Record<string, unknown>) => {
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
    };
  }
  if (query?.capacity) {
    query2["capacity"] = { $regex: new RegExp(query?.capacity as string, "i") }; // Case-sensitive regex
  }
  if (query?.color) {
    query2["color"] = { $regex: new RegExp(query?.color as string, "i") }; // Case-sensitive regex
  }

  const result = await InventoryModel.find(query2);
  return result;
};

const getSingleInventoryDB = async (id: string | undefined) => {
  const result = await InventoryModel.findOne({ _id: id });
  return result;
};
const updateInventoryDB = async (id: string, payload: TInventory) => {
  const result = await InventoryModel.updateOne({ _id: id }, payload);

  return result;
};

const deleteInventoryDB = async (payload: string[]) => {
  const filter = { _id: { $in: payload } };

  const result = await InventoryModel.deleteMany(filter);

  if (result?.deletedCount > 0) {
    const result2 = await InventoryModel.find();

    return result2;
  }
  return null;
};

export const InventoryServices = {
  createInventoryDB,
  getInventoryDB,
  updateInventoryDB,
  deleteInventoryDB,
  getSingleInventoryDB,
};
