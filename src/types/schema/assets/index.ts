import { z } from "zod";

export const assetSchema = z.object({
  asset: z.string().min(3, "Asset must be at least 2 characters long"),
  currency: z.string().min(1, "Currency is required"),
  value: z.number().min(1, "Value must be greater than 0"),
});

export type AssetType = z.infer<typeof assetSchema>;
