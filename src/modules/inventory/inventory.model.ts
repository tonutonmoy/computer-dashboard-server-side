import { Schema, model } from "mongoose";

import { TInventory } from "./inventory.interface";

const inventorySchema = new Schema<TInventory>({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  compatibility: { type: String, required: true },
  interface: { type: String, required: true },
  condition: { type: String, required: true },
  capacity: { type: String, required: true },
  color: { type: String, required: true },
});

const InventoryModel = model<TInventory>("Inventory", inventorySchema);

export default InventoryModel;
