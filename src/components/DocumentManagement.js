import React, { useState } from "react";
import "../assets/css/DocumentManagement.css";

function DocumentManagement() {
  const [files, setFiles] = useState([]);

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  return (
    <div className="document-management">
      <h1>Document Management</h1>
      <div className="upload-section">
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="file-input"
        />
      </div>
      <div className="file-list">
        <h2>Uploaded Files</h2>
        <ul>
          {files.map((file, index) => (
            <li key={index} className="file-item">
              <span className="file-name">{file.name}</span>
              <button className="download-btn">Download</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DocumentManagement;
