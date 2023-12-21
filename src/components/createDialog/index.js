import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./createDialog.module.css";
import axios from 'axios';
import { toast } from "react-toastify";

export default function CreateDialog({
    open,
    setOpen,
    handleClickOpen,
    handleClose,
}) {
    const [productName, setProductName] = React.useState("");

    const handleCreateProduct = async () => {
        try {
            const userDetails = JSON.parse(localStorage.getItem("userDetails"));
            const userId = userDetails._id;
            console.log(userDetails);
    
            const response = await axios.post('/project/create', {
                name: productName,
                userId: userId,
            });
    
            toast.success("Project added successfully");
            console.log('Project created:', response.data);
            handleClose();
        } catch (error) {
            toast.error("Error creating project");
            console.error('Error creating project:', error);
        }
    };    

    const handleInputChange = (event) => {
        setProductName(event.target.value);
    };

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className={styles.heading}>Create Project</DialogTitle>
                <DialogContent>
                    <DialogContentText className={styles.subHeading}>Enter Project Name:</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="text" // Changed from "email" to "text" for project name
                        fullWidth
                        variant="outlined"
                        label="Type Here"
                        className={styles.textField}
                        value={productName}
                        onChange={handleInputChange} // Update state as the input changes
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className={styles.cancelButton}>
                        Cancel
                    </Button>
                    <Button onClick={handleCreateProduct} variant="contained">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
