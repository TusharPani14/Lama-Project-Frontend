import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./editTranscript.module.css";
import { Button } from "@mui/material";
import { toast } from "react-toastify";

const EditTranscriptComp = () => {
  const { projectName, fileId } = useParams();
  const [fileData, setFileData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/project/getSingleFile`, {
          params: {
            projectName: projectName,
            fileId: fileId,
          },
        });
        console.log("File data:", response.data);
        setFileData(response.data.file);
        setEditedDescription(response.data.file.description);
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    };

    fetchData();
  }, [projectName, fileId]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleEditUnclick = () => {
    setIsEditing(false);
  };

  const handleSaveClick = async () => {
    try {
      const updatedFile = {
        projectName: projectName,
        fileId: fileId,
        fileDesc: editedDescription,
      };

      const response = await axios.put("/project/editFile", updatedFile);
      toast.success(response.data.message);
      console.log("File updated:", response.data);

      setFileData((prevFileData) => ({
        ...prevFileData,
        description: editedDescription,
      }));

    } catch (error) {
      toast.success("Error updating file:");
      console.error("Error updating file:", error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.headingFlex}>
        <h2 className={styles.heading}>Edit Transcript</h2>
        {isEditing && (
          <div className={styles.buttons}>
            <Button
              variant="outlined"
              color="error"
              className={styles.discardButton}
              onClick={handleEditUnclick}
            >
              Discard
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={styles.saveButton}
              onClick={handleSaveClick}
            >
              Save and Edit
            </Button>
          </div>
        )}
      </div>
      {isEditing ? (
        <div className={styles.textArea}>
          <h3 className={styles.fileName}>{fileData.name}</h3>
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className={`${styles.textField} ${styles.fileDesc}`}
            rows="12"
          ></textarea>
        </div>
      ) : (
        <div className={styles.textArea}>
          <button onClick={handleEditClick} className={styles.editButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14.0588 9.02L14.9788 9.94L5.91878 19H4.99878V18.08L14.0588 9.02ZM17.6588 3C17.4088 3 17.1488 3.1 16.9588 3.29L15.1288 5.12L18.8788 8.87L20.7088 7.04C21.0988 6.65 21.0988 6.02 20.7088 5.63L18.3688 3.29C18.1688 3.09 17.9188 3 17.6588 3ZM14.0588 6.19L2.99878 17.25V21H6.74878L17.8088 9.94L14.0588 6.19Z"
                fill="white"
              />
            </svg>
            <p>Edit Mode</p>
          </button>
          <h3 className={styles.fileName}>{fileData.name}</h3>
          <p className={styles.fileDesc}>{fileData.description}</p>
        </div>
      )}
    </div>
  );
};

export default EditTranscriptComp;
