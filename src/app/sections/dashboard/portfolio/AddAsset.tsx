"use client";
import Button from "@/components/button";
import { assetSchema, AssetType } from "@/types/schema/assets";
import { StockSearch } from "@/types/stocks/search";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const AddAsset = ({ stocks }: { stocks: StockSearch[] }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AssetType>({
    resolver: zodResolver(assetSchema),
    defaultValues: {
      currency: "IDR", // Set default currency
      value: 1, // Set default value
    },
  });

  const onSubmit = async (data: AssetType) => {
    const { asset, currency, value } = data;
    const requestBody = {
      asset,
      currency, // Automatically "IDR"
      value, // Automatically 1
    };
    try {
      const res = await fetch("/api/user-assets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (res.ok) {
        toast.success("Asset added successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        toast.error("Failed to add asset");
      }
    } catch (error) {
      toast.error(
        "An error occurred while creating account. Please try again later."
      );
      console.error("error add assets", error);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <div className="w-full py-3 px-9 flex gap-3 bg-gray/50 rounded-3xl text-white">
          <Search size={40} className="text-white" />
          <input
            className="text-white focus:border-none w-full bg-transparent"
            type="text"
            placeholder="Search for companies"
            list="stocksData"
            {...register("asset", { required: true })}
          />
        </div>
        {errors.asset && <p className="text-red-500">Asset is required</p>}
        <datalist id="stocksData">
          {stocks.map((item: StockSearch) => {
            return (
              <option
                key={item.symbol}
                className="w-full px-8 py-2 bg-gray/50 "
                value={item.displaySymbol}
              >
                {item.displaySymbol}
              </option>
            );
          })}
        </datalist>
      </div>
      <Button className="w-full mt-4">Add</Button>
    </form>
  );
};

export default AddAsset;
