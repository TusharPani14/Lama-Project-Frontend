import React, { useEffect, useState } from "react";
import logo from "../../../Assets/logo.png";
import styles from "./navbar.module.css";
import { Button, Avatar, Menu, MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoginDialog from "../../loginDialog";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [userAvatarText, setUserAvatarText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    if (userDetails) {
      setUserLoggedIn(true);
      setUserAvatarText(userDetails.email.charAt(0).toUpperCase());
    } else {
      setUserLoggedIn(false);
      setUserAvatarText("");
    }
  }, []);

  const handleSuccessfulSignup = (userDetails) => {
    setUserLoggedIn(true);
    setUserAvatarText(userDetails.email.charAt(0).toUpperCase());
  };

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleAccountClick = () => {
    navigate("/account");
    handleMenuClose();
  };

  const handleLogout = () => {
    localStorage.removeItem("userDetails");
    setUserLoggedIn(false);
    handleMenuClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.navbar}>
      <img src={logo} alt="logo" className={styles.logo} />
      {userLoggedIn ? (
        <div>
          <Avatar
            sx={{ bgcolor: "#673ab7", width: 56, height: 56 , cursor: "pointer"}}
            onClick={handleAvatarClick}
          >
            {userAvatarText}
          </Avatar>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleAccountClick}>Account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </div>
      ) : (
        <Button
          variant="outlined"
          className={styles.loginButton}
          onClick={handleClickOpen}
        >
          Login
        </Button>
      )}
      {open && (
        <LoginDialog
          open={open}
          handleClose={handleClose}
          handleSuccessfulSignup={handleSuccessfulSignup}
        />
      )}
    </div>
  );
};

export default Navbar;
