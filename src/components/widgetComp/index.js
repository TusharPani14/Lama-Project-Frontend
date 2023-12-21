import React, { useState } from "react";
import styles from "./widgetComp.module.css";
import { Avatar, Button, Switch, Tab, Tabs, TextField } from "@mui/material";
import { toast } from "react-toastify";
import axios from "axios";

const WidgetComp = () => {
  const [value, setValue] = React.useState(0);
  const [chatbotName, setChatbotName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState("");
  const [generalWidget, setGeneralWidget] = useState();
  const [primaryColor, setPrimaryColor] = useState("");
  const [fontColor, setFontColor] = useState("");
  const [fontSize, setFontSize] = useState("");
  const [chatHeight, setChatHeight] = useState("");
  const [showSources, setShowSources] = useState(true);
  const [iconSize, setIconSize] = useState("");
  const [position, setPosition] = useState("");
  const [distanceFromBottom, setDistanceFromBottom] = useState("");
  const [horizontalDistance, setHorizontalDistance] = useState("");
  const [imgUrl, setImgUrl] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChatbotNameChange = (event) => {
    setChatbotName(event.target.value);
  };

  const handleWelcomeMessageChange = (event) => {
    setWelcomeMessage(event.target.value);
  };

  const handleInputPlaceholderChange = (event) => {
    setInputPlaceholder(event.target.value);
  };

  const handlePrimaryColorChange = (event) => {
    setPrimaryColor(event.target.value);
  };

  const handleFontColorChange = (event) => {
    setFontColor(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    setFontSize(event.target.value);
  };

  const handleChatHeightChange = (event) => {
    setChatHeight(event.target.value);
  };

  const handleShowSourcesChange = (event) => {
    setShowSources(event.target.checked);
  };

  const handleIconSizeChange = (event) => {
    setIconSize(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleDistanceFromBottomChange = (event) => {
    setDistanceFromBottom(event.target.value);
  };

  const handleHorizontalDistanceChange = (event) => {
    setHorizontalDistance(event.target.value);
  };

  const handleSaveGeneralWidget = async () => {
    try {
      const response = await axios.post("/widget/generalWidget", {
        chatbotName,
        welcomeMessage,
        inputPlaceholder,
      });

      toast.success(response.data.message);
      setGeneralWidget(response.data.data);
      console.log("General Widget details saved:", response.data.data);
      setValue(1);
    } catch (error) {
      toast.error("Error saving general widget details:");
      console.error("Error saving general widget details:", error);
    }
  };

  const handleSaveDisplayWidget = async () => {
    const widgetId = generalWidget._id;
    try {
      const response = await axios.post("/widget/displayWidget", {
        widgetId,
        primaryColor,
        fontColor,
        fontSize,
        chatHeight,
        showSources,
      });

      toast.success(response.data.message);
      console.log("Display Widget details saved:", response.data.data);
    } catch (error) {
      toast.error("Error saving display widget details:");
      console.error("Error saving display widget details:", error);
    }
  };

  const handleSaveChatIconDetails = async () => {
    const widgetId = generalWidget._id;
    const fileInput = document.querySelector('input[type="file"]');
    const file = fileInput.files[0];

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("widgetId", widgetId);
      formData.append("iconSize", iconSize);
      formData.append("position", position);
      formData.append("distanceFromBottom", distanceFromBottom);
      formData.append("horizontalDistance", horizontalDistance);

      const response = await axios.post("/widget/chatIcon", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(response.data.message);
      setImgUrl(response.data.data.finalUrl)
      console.log("Chat Icon details saved:", response.data.data);
    } catch (error) {
      toast.error("Error saving chat icon details:");
      console.error("Error saving chat icon details:", error);
    }
  };

  return (
    <div className={styles.main}>
      <h3 className={styles.heading}>Configuration</h3>
      <Tabs value={value} onChange={handleChange} aria-label="tabs example">
        <Tab
          label="General"
          className={value === 0 ? styles.selectedTab : styles.notSelectedTab}
        />
        <Tab
          label="Display"
          className={value === 1 ? styles.selectedTab : styles.notSelectedTab}
        />
        <Tab label="Advanced" disabled className={styles.notSelectedTab} />
      </Tabs>
      {value === 0 && (
        <div>
          <h3 className={styles.formHeading}>Chatbot Name</h3>
          <TextField
            required
            id="outlined-required"
            label="Required"
            fullWidth
            value={chatbotName}
            onChange={handleChatbotNameChange}
          />
          <h3 className={styles.formHeading}>Welcome Message</h3>
          <TextField
            id="outlined-required"
            fullWidth
            value={welcomeMessage}
            onChange={handleWelcomeMessageChange}
          />
          <h3 className={styles.formHeading}>Input Placeholder</h3>
          <TextField
            id="outlined-required"
            fullWidth
            value={inputPlaceholder}
            onChange={handleInputPlaceholderChange}
          />
          <Button
            variant="contained"
            component="label"
            className={styles.button}
            onClick={handleSaveGeneralWidget}
          >
            Save
          </Button>
        </div>
      )}
      {value === 1 && (
        <div style={{ marginBottom: "30px" }}>
          <div className={styles.formFlex}>
            <div className={styles.singleInput}>
              <h3 className={styles.formHeading}>Primary Color</h3>
              <TextField
                id="outlined-required"
                sx={{ width: "450px" }}
                value={primaryColor}
                onChange={handlePrimaryColorChange}
              />
            </div>
            <div className={styles.singleInput}>
              <h3 className={styles.formHeading}>Font Color</h3>
              <TextField
                id="outlined-required"
                sx={{ width: "450px" }}
                value={fontColor}
                onChange={handleFontColorChange}
              />
            </div>
            <div className={styles.singleInput}>
              <h3 className={styles.formHeading}>Font Size (in px)</h3>
              <TextField
                id="outlined-required"
                sx={{ width: "450px" }}
                value={fontSize}
                onChange={handleFontSizeChange}
              />
            </div>
            <div className={styles.singleInput}>
              <h3 className={styles.formHeading}>
                Chat Height (in % of total screen)
              </h3>
              <TextField
                id="outlined-required"
                sx={{ width: "450px" }}
                value={chatHeight}
                onChange={handleChatHeightChange}
              />
            </div>
            <div className={styles.singleCheck}>
              <h3 className={styles.formHeading}>Show Sources</h3>
              <Switch
                defaultChecked
                color="secondary"
                sx={{ fontSize: 40 }}
                className={styles.checkBox}
                onChange={handleShowSourcesChange}
              />
            </div>
          </div>
          <Button
            variant="contained"
            component="label"
            className={styles.button}
            onClick={handleSaveDisplayWidget}
          >
            Save
          </Button>
          <hr
            style={{
              height: "2px",
              border: "none",
              color: "#DADADA",
              backgroundColor: "#DADADA",
              marginTop: "20px",
            }}
          />
          <h2 className={styles.subHeading}>Chat Icon</h2>
          <div className={styles.formFlex}>
            <div className={styles.singleInput}>
              <h3 className={styles.formHeading}>Chat Icon Size</h3>
              <TextField
                id="outlined-required"
                sx={{ width: "450px" }}
                value={iconSize}
                onChange={handleIconSizeChange}
              />
            </div>
            <div className={styles.singleInput}>
              <h3 className={styles.formHeading}>Position on Screen</h3>
              <TextField
                id="outlined-required"
                sx={{ width: "450px" }}
                value={position}
                onChange={handlePositionChange}
              />
            </div>
            <div className={styles.singleInput}>
              <h3 className={styles.formHeading}>
                Distance from Bottom (in px)
              </h3>
              <TextField
                id="outlined-required"
                sx={{ width: "450px" }}
                value={distanceFromBottom}
                onChange={handleDistanceFromBottomChange}
              />
            </div>
            <div className={styles.singleInput}>
              <h3 className={styles.formHeading}>
                Horizontal Distance (in px)
              </h3>
              <TextField
                id="outlined-required"
                sx={{ width: "450px" }}
                value={horizontalDistance}
                onChange={handleHorizontalDistanceChange}
              />
            </div>
            <div className={styles.singleCheck}>
              <h3 className={styles.formHeading}>Bot Icon</h3>
              <Button
                variant="contained"
                component="label"
                className={styles.button}
              >
                Upload Image
                <input type="file" hidden />
              </Button>
            </div>
          </div>
          <Avatar alt="Remy Sharp" src={imgUrl} sx={{ width: 100, height: 100 }}/>
          <Button
            variant="contained"
            component="label"
            className={styles.button}
            onClick={handleSaveChatIconDetails}
          >
            Save
          </Button>
        </div>
      )}
    </div>
  );
};

export default WidgetComp;
