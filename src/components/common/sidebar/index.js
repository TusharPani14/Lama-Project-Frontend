import { List, ListItem } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "./sidebar.module.css";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSelectedItem = localStorage.getItem("selectedItem");
    if (storedSelectedItem) {
      setSelectedItem(parseInt(storedSelectedItem));
    }
  }, []);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    localStorage.setItem("selectedItem", index);

    switch (index) {
      case 0:
        navigate("/display-project");
        break;
      case 1:
        navigate("/widget-configuration");
        break;
      case 4:
        navigate("/account");
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.list}>
      <List>
        <ListItem
          className={selectedItem === 0 ? styles.selectedItem : ""}
          onClick={() => handleItemClick(0)}
        >
          <div className={styles.listItem}>
            <div className={styles.nums}>1</div>
            <div
              className={`${styles.listText} ${
                selectedItem === 0 ? styles.selectedText : ""
              }`}
            >
              Projects
            </div>
          </div>
        </ListItem>
        <ListItem
          className={selectedItem === 1 ? styles.selectedItem : ""}
          onClick={() => handleItemClick(1)}
        >
          <div className={styles.listItem}>
            <div className={styles.nums}>2</div>
            <div
              className={`${styles.listText} ${
                selectedItem === 1 ? styles.selectedText : ""
              }`}
            >
              Widget Configuration
            </div>
          </div>
        </ListItem>
        <ListItem
          className={selectedItem === 2 ? styles.selectedItem : ""}
          onClick={() => handleItemClick(2)}
        >
          <div className={styles.listItem}>
            <div className={styles.nums}>3</div>
            <div
              className={`${styles.listText} ${
                selectedItem === 2 ? styles.selectedText : ""
              }`}
            >
              Deployment
            </div>
          </div>
        </ListItem>
        <ListItem
          className={selectedItem === 3 ? styles.selectedItem : ""}
          onClick={() => handleItemClick(3)}
        >
          <div className={styles.listItem}>
            <div className={styles.nums}>4</div>
            <div
              className={`${styles.listText} ${
                selectedItem === 3 ? styles.selectedText : ""
              }`}
            >
              Pricing
            </div>
          </div>
        </ListItem>
      </List>
      <div
        className={`${styles.settingSection} ${
          selectedItem === 4 ? styles.selectedItem : ""
        }`}
        onClick={() => handleItemClick(4)}
      >
        <SettingsIcon sx={{ fontSize: 40 }} /> Settings
      </div>
    </div>
  );
};

export default Sidebar;
