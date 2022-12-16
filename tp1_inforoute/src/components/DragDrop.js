// TP1 Inforoute
// Fait par:
// Cédrick Larrivée
// Louis David-Labrie
// 2022-10-16


import React from "react";
import { useDropzone } from "react-dropzone";
import "./../index.css";
//source https://blog.openreplay.com/create-a-drag-and-drop-zone-in-react-with-react-dropzone


/**
 * 
 * @param {*} param0  file name
 * @returns return an interactive div that provide drag and drop features.
 */
function Dropzone({ open }) {
  const { getRootProps, getInputProps, acceptedFiles } =
    useDropzone({});

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div className="container">
      <div {...getRootProps({ className: "dropzone" })}id="dragndrop">
        <input {...getInputProps()} />
        <p>Drag 'n' drop image here.</p>
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </div>
  );
}

export default Dropzone;