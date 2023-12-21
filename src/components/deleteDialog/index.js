import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import styles from "./deleteDialog.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteDialog = ({
  deleteDialogOpen,
  handleDeleteOpen,
  handleDeleteClose,
  fileId,
}) => {
  const { projectName } = useParams();

  const deleteFile = async () => {
    try {
      const response = await axios.post("https://lama-project-backend.vercel.app/project/deleteFile", {
        projectName: projectName,
        fileId: fileId,
      });

      toast.success(response.data.message);
      console.log(response.data.message);

      handleDeleteClose();
    } catch (error) {
      toast.error("Error deleting file:");
      console.error("Error deleting file:", error);
    }
  };

  return (
    <div>
      <Dialog
        open={deleteDialogOpen}
        onClose={handleDeleteClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={styles.heading}>
          Confirm File Deletion
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            className={styles.desc}
          >
            Are you sure you want to delete this file? This action cannot be
            undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose}>Cancel</Button>
          <Button onClick={deleteFile} autoFocus color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteDialog;
