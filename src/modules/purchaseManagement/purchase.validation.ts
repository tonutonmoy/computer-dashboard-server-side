import { z } from "zod";

const createPurchase = z.object({
  name: z.string(),
  buyerName: z.string(),
  buyerEmail: z.string(),
  quantity: z.number(),
  price: z.number(),
  date: z.string(),
  category: z.string(),
  brand: z.string(),
  compatibility: z.string(),
  interface: z.string(),
  capacity: z.string(),
  color: z.string(),
});
export const PurchaseValidation = { createPurchase };
