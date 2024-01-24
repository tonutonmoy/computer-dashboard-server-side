import catchAsync from "../../app/config/utlis/catchAsync";

import { InventoryServices } from "./inventory.services";

const createInventory = catchAsync(async (req, res) => {
  console.log("aise");
  const result = await InventoryServices.createInventoryDB(req?.body);

  res.send({
    statusCode: 201,
    success: true,
    message: "Inventory created successfully",
    data: result,
  });
});

const getInventory = catchAsync(async (req, res) => {
  const query = req?.query;
  const result = await InventoryServices.getInventoryDB(query);

  res.send({
    statusCode: 201,
    success: true,
    message: "Inventory get successfully",
    data: result,
  });
});

const updateInventory = catchAsync(async (req, res) => {
  const result = await InventoryServices.updateInventoryDB();

  res.send({
    statusCode: 201,
    success: true,
    message: "Inventory  update successfully",
    data: result,
  });
});

const deleteInventory = catchAsync(async (req, res) => {
  const result = await InventoryServices.deleteInventoryDB();

  res.send({
    statusCode: 201,
    success: true,
    message: "Inventory delete successfully",
    data: result,
  });
});

export const InventoryControllers = {
  createInventory,
  getInventory,
  updateInventory,
  deleteInventory,
};
