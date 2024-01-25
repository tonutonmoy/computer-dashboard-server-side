import InventoryModel from "../inventory/inventory.model";
import { TSales } from "./salesManagement.interface";
import SalesModel from "./salesManagement.model";

const CreateSalesDB = async (payload: TSales) => {
  const data = await SalesModel.create(payload);

  let finalResult: any = [];
  if (!data) {
    return null;
  }

  const result = await InventoryModel.updateOne(
    { _id: payload?.productId },
    { $inc: { quantity: -payload?.quantity } }
  );

  if (result?.modifiedCount > 0) {
    const inventoryData = await InventoryModel.findOne({
      _id: payload?.productId,
    });
    finalResult = await InventoryModel.find();

    const quantity = inventoryData?.quantity;
    console.log(quantity);
    if (quantity < 1) {
      console.log("dhukise");
      const result = await InventoryModel.deleteOne({
        _id: payload?.productId,
      });
      finalResult = await InventoryModel.find();
    }
  }
  return finalResult;
};

export const CreateSalesServices = {
  CreateSalesDB,
};
