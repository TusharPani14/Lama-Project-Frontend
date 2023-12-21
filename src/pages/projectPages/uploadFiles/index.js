import React from "react";
import Sidebar from "../../../components/common/sidebar";
import Navbar from "../../../components/common/navbar";
import Upload from "../../../components/upload";
import styles from "./upload.module.css";

const UploadFiles = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.flexSection}>
        <Sidebar />
        <Upload />
      </div>
    </div>
  );
};

export default UploadFiles;
