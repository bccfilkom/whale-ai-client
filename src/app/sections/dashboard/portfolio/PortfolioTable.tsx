"use client";
import { Assets } from "@/types/assets";
import { Pencil, Trash } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import chartIcon from "@/assets/icon/topten-most-active.svg";
import ConfirmationModal from "@/components/modal/confirmation";
import { toast } from "sonner";

const PortfolioTable = ({ userAssets }: { userAssets: Assets[] }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAssetId, setSelectedAssetId] = useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setSelectedAssetId(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedAssetId(null);
  };

  const handleConfirmDialog = async () => {
    if (!selectedAssetId) return;

    try {
      const res = await fetch(`/api/user-assets/delete`, {
        method: "POST",
        body: JSON.stringify({ id: selectedAssetId }),
      });

      if (res.ok) {
        toast.success("Success delete assets");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete asset:");
    } finally {
      handleCloseDialog();
    }
  };

  return (
    <div className="bg-gray/50 rounded-3xl text-white p-6 md:p-9 space-y-4 md:space-y-9 w-full">
      <div className="flex gap-3">
        <Image src={chartIcon} alt="" />
        <h4 className="">My Stocks</h4>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-[#7E7E7E] self-start">
            <th className="text-start pr-4 pb-9 w-1/4">Symbol</th>
            <th className=" pb-9 w-1/4">Currency</th>
            <th className="pl-4 pb-9 w-1/4">Share</th>
            <th className="pl-4 pb-9 w-1/4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userAssets &&
            userAssets.map((assets) => {
              return (
                <tr key={assets.id}>
                  <td className="text-base 2xl:text-xl text-start pr-4 w-1/4">
                    {assets.asset}
                  </td>
                  <td className="text-base 2xl:text-xl text-center w-1/4">
                    {assets.currency}
                  </td>
                  <td className="text-base 2xl:text-xl text-center pl-4 w-1/4">
                    {assets.value}
                  </td>
                  <td className="text-base 2xl:text-xl text-center pl-4 w-1/4">
                    <div className="flex items-center gap-3">
                      {/* Trigger the alert dialog */}
                      <Pencil className="text-white cursor-pointer" />
                      <Trash
                        className="text-white cursor-pointer"
                        onClick={() => handleDeleteClick(assets.id)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* Confirmation Dialog */}
      {openDialog && (
        <ConfirmationModal
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          handleCloseDialog={handleCloseDialog}
          handleConfirmDialog={handleConfirmDialog}
        />
      )}
    </div>
  );
};

export default PortfolioTable;
