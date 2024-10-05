"use client";
import React, { useState } from "react";
import { Assets } from "@/types/assets";
import { Pencil, Trash } from "lucide-react";
import Image from "next/image";
import chartIcon from "@/assets/icon/topten-most-active.svg";
import { toast } from "sonner";
import ConfirmationModal from "@/components/modal/confirmation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import Button from "@/components/button";

const PortfolioTable = ({ userAssets }: { userAssets: Assets[] }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<Assets | null>(null);
  const [editedAsset, setEditedAsset] = useState<Assets | null>(null);

  const handleDeleteClick = (id: string) => {
    setSelectedAsset(userAssets.find((asset) => asset.id === id) || null);
    setOpenDialog(true);
  };

  const handleEditClick = (id: string) => {
    const asset = userAssets.find((asset) => asset.id === id);
    if (asset) {
      setEditedAsset({ ...asset }); // Copy asset data for editing
      setOpenEditDialog(true);
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setOpenEditDialog(false);
    setSelectedAsset(null);
    setEditedAsset(null);
  };

  const handleConfirmDelete = async () => {
    if (!selectedAsset) return;

    try {
      const res = await fetch(`/api/user-assets/delete`, {
        method: "POST",
        body: JSON.stringify({ id: selectedAsset.id }),
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

  const handleConfirmEdit = async () => {
    if (!editedAsset) return;

    try {
      const res = await fetch(`/api/user-assets`, {
        method: "PUT",
        body: JSON.stringify({
          id: editedAsset.id,
          value: editedAsset.value,
        }),
      });

      if (res.ok) {
        toast.success("Asset updated successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        throw new Error("Update failed");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to update asset");
    } finally {
      handleCloseDialog();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedAsset({
      ...editedAsset!,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray/50 rounded-3xl text-white p-6 md:p-9 space-y-4 md:space-y-9 w-full whitespace-nowrap max-w-full overflow-x-auto">
      <div className="flex gap-3">
        <Image src={chartIcon} alt="" />
        <h4 className="">My Stocks</h4>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-[#7E7E7E]">
            <th className="text-start pr-4 pb-9 w-1/4">Symbol</th>
            <th className="pb-9 w-1/4">Currency</th>
            <th className="pl-4 pb-9 w-1/4">Share</th>
            <th className="pl-4 pb-9 w-1/4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userAssets &&
            userAssets.map((assets) => (
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
                    <Pencil
                      className="text-white cursor-pointer"
                      onClick={() => handleEditClick(assets.id)}
                    />
                    <Trash
                      className="text-white cursor-pointer"
                      onClick={() => handleDeleteClick(assets.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {/* Confirmation Dialog */}
      {openDialog && (
        <ConfirmationModal
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          handleCloseDialog={handleCloseDialog}
          handleConfirmDialog={handleConfirmDelete}
        />
      )}

      {/* Edit Asset Dialog */}
      <Dialog open={openEditDialog} onOpenChange={setOpenEditDialog}>
        <DialogContent className="border-none bg-gray/100 text-white">
          <DialogHeader>
            <DialogTitle>Edit Asset</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <input
              className="py-2 px-1 w-full rounded-md text-black"
              name="value"
              type="number"
              value={editedAsset?.value || ""}
              onChange={handleInputChange}
              placeholder="Enter share value"
            />
          </div>
          <DialogFooter className="mt-8">
            <Button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleConfirmEdit}
            >
              Update
            </Button>
            <DialogClose className="bg-black text-white px-4 py-2 rounded-md">
              Cancel
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortfolioTable;
