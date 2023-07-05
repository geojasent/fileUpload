import React, { useState } from "react";

const UploadButton = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);

    setIsFilePicked(true);
  };

  const handleSubmission = () => {};
  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />

      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
};

export default UploadButton;
