import { TPurchase } from "./purchase.interface";
import PurchaseModel from "./purchase.model";

const CreatePurchaseDB = async (payload: TPurchase) => {
  const result = await PurchaseModel.create(payload);

  return result;
};

const GetPurchaseDB = async () => {
  const result = await PurchaseModel.find();
  return result;
};

export const PurchaseServices = {
  CreatePurchaseDB,
  GetPurchaseDB,
};
