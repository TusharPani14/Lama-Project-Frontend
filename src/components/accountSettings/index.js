import React, { useState } from "react";
import styles from "./account.module.css";
import { Avatar, Button, TextField } from "@mui/material";

const AccountSettings = () => {
  const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  const initials = userDetails ? userDetails.email[0].toUpperCase() : "";
  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>Account Settings</h2>
      <div className={styles.flexSection}>
        <Avatar
          sx={{
            width: 150,
            height: 150,
            backgroundColor: "#7E22CE",
            fontSize: "2rem",
          }}
        >
          {initials}
        </Avatar>
        <div>
          <h3 className={styles.formHeading}>User Name</h3>
          <TextField
            id="outlined-required"
            label="Name"
            sx={{ width: "380px" }}
          />
        </div>
        <div>
          <h3 className={styles.formHeading}>Email</h3>
          <TextField
            id="outlined-required"
            sx={{ width: "380px" }}
            value={userDetails ? userDetails.email : ""}
          />
        </div>
      </div>
      <h3 className={styles.heading}>Subcriptions</h3>
      <div className={styles.subscription}>
        <p>You are currently on the Ques AI Basic Plan!</p>
        <Button variant="contained" className={styles.upgradeButton}>Upgrade</Button>
      </div>
      <h4 className={styles.cancel}>Cancel Subscription</h4>
    </div>
  );
};

export default AccountSettings;
