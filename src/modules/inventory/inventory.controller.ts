import catchAsync from "../../app/config/utlis/catchAsync";

import { InventoryServices } from "./inventory.services";

const createInventory = catchAsync(async (req, res) => {
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
const getSingleInventory = catchAsync(async (req, res) => {
  const query: string | undefined = req?.params?.id;
  console.log(query, "aise");
  const result = await InventoryServices.getSingleInventoryDB(query);

  res.send({
    statusCode: 201,
    success: true,
    message: "Inventory get successfully",
    data: result,
  });
});

const updateInventory = catchAsync(async (req, res) => {
  const id = req?.params?.id;
  const payload = req?.body;

  delete payload?.id;

  const result = await InventoryServices.updateInventoryDB(id, payload);

  res.send({
    statusCode: 201,
    success: true,
    message: "Inventory  update successfully",
    data: result,
  });
});

const deleteInventory = catchAsync(async (req, res) => {
  const payload = req?.body;
  const result = await InventoryServices.deleteInventoryDB(payload);

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
  getSingleInventory,
};
