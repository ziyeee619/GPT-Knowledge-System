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
      <h1>文檔管理</h1>
      <div className="upload-section">
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="file-input"
        />
      </div>
      <div className="file-list">
        <h2>上傳文件</h2>
        <ul>
          {files.map((file, index) => (
            <li key={index} className="file-item">
              <span className="file-name">{file.name}</span>
              <button className="download-btn">下載</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DocumentManagement;
