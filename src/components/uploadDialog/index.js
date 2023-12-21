import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./uploadDialog.module.css";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify";

export default function UploadDialog({
    open,
    setOpen,
    handleClickOpen,
    handleClose,
}) {
    const { projectName } = useParams(); 

    const [fileDetails, setFileDetails] = React.useState({
        name: '',
        description: ''
    });

    const handleFileDetailsChange = (e) => {
        const { id, value } = e.target;
        setFileDetails(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleUploadFile = async () => {
        try {
            const { name, description } = fileDetails;

            await axios.post('https://lama-project-backend.vercel.app/project/uploadFile', {
                name,
                description,
                projectName 
            });

            toast.success('File uploaded successfully');
            handleClose();
        } catch (error) {
            toast.error('Failed to upload file');
            console.error('Error uploading file:', error);
        }
    };

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className={styles.heading}>Upload File</DialogTitle>
                <DialogContent>
                    <DialogContentText className={styles.subHeading}>Name:</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        type="text"
                        fullWidth
                        variant="outlined"
                        label="Type Here"
                        className={styles.textField}
                        value={fileDetails.name}
                        onChange={handleFileDetailsChange}
                    />
                    <DialogContentText className={styles.subHeading}>Description:</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="description"
                        type="text"
                        fullWidth
                        variant="outlined"
                        label="Type Here"
                        className={styles.textField}
                        value={fileDetails.description}
                        onChange={handleFileDetailsChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleUploadFile} variant="contained">
                        Upload
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
