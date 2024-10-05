import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import React from "react";

const ConfirmationModal = ({
  openDialog,
  setOpenDialog,
  handleCloseDialog,
  handleConfirmDialog,
}: {
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  handleCloseDialog: () => void;
  handleConfirmDialog: () => void;
}) => {
  return (
    <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Asset</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to edit this asset?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCloseDialog}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmDialog}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmationModal;
