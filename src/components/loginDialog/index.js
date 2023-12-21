import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styles from "./loginDialog.module.css";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";

export default function LoginDialog({
    open,
    handleClose,
    handleSuccessfulSignup
}) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState()

    const handleSignup = () => {
        setLoading(true);
        axios.post(`https://lama-project-backend.vercel.app/user/register`, { email, password })
            .then(response => {
                toast.success("Signup successful!")
                console.log("Signup successful!", response.data);
                localStorage.setItem("userDetails", JSON.stringify({ _id: response.data._id, email }));
                handleSuccessfulSignup({ _id: response.data._id, email });
            })
            .catch(error => {
                toast.error("Error signing up:")
                console.error("Error signing up:", error);
            })
            .finally(() => {
                setLoading(false);
                handleClose();
            });
    };

    return (
        <React.Fragment>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle className={styles.heading}>Sign Up</DialogTitle>
                <DialogContent>
                    <DialogContentText>Email:</DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="email"
                        type="email"
                        fullWidth
                        variant="outlined"
                        label="Email"
                        className={styles.textField}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <DialogContentText>Password:</DialogContentText>
                    <TextField
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        className={styles.textField}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} className={styles.cancelButton}>
                        Cancel
                    </Button>
                    <Button onClick={handleSignup} variant="contained">
                        Signup
                    </Button>
                </DialogActions>
            </Dialog>
            {loading && (<CircularProgress />)}
        </React.Fragment>
    );
}
