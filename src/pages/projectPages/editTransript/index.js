import React from "react";
import Sidebar from "../../../components/common/sidebar";
import EditTranscriptComp from "../../../components/editTranscript";
import styles from "./editTranscript.module.css";
import Navbar from "../../../components/common/navbar";

const EditTranscript = () => {
  return (
    <>
      <Navbar />
      <div className={styles.flexDiv}>
        <Sidebar />
        <EditTranscriptComp />
      </div>
    </>
  );
};

export default EditTranscript;
