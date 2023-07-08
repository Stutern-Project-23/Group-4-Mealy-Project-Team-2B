import React, { useState, useCallback, useRef } from "react";
import styled from "styled-components";
import EllipseImg from "../../../assets/images/Ellipse.png";

const ProfilePictureUploader = React.memo(() => {
  const [preview, setPreview] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [scale, setScale] = useState(1);

  const fileInputRef = useRef(null);
  const editorRef = useRef();

  const onSave = useCallback(async () => {
    // Save the profile picture to local storage
    const canvas = editorRef.current.getImageScaledToCanvas();
    const blob = await new Promise((resolve) => {
      canvas.toBlob((result) => resolve(result));
    });

    localStorage.setItem("profilePicture", blob);

    // Use the current preview image when resetting the state
    const imageSrc = URL.createObjectURL(blob);
    const imageTag = document.getElementById("preview-image");
    if (imageTag) {
      imageTag.setAttribute("src", imageSrc);
    }
    setShowEditor(false);
    setScale(1);
  }, [setShowEditor]);

  const onCancel = useCallback(() => {
    // Reset the profile picture preview and cancel any changes
    setShowEditor(false);
    setPreview(null);
    setScale(1);
  }, []);

  const handleZoom = useCallback((value) => {
    if (value >= 1 && value <= 2) {
      setScale(value);
    }
  }, []);

  const handleFileChange = useCallback((event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setPreview(reader.result);
        setShowEditor(true);
      };

      reader.readAsDataURL(file);
    }
  }, []);

  return (
    <ProfilePicUploader>
      <div className="profile-picture-upload-div">
        {preview ? (
          <div className="display-profile-pic">
            <img
              className="display-profile-pic"
              src={preview}
              alt="Selected-profile-img"
              id="preview-image"
              width={100}
              height={100}
            />
          </div>
        ) : (
          <div className="no-profile-pic">
            <img src={EllipseImg} alt="" className="no-img" />
            {/* <PanoramaIcon className="no-img" /> */}
          </div>
        )}
        <div className="profile-pic-details">
          <p className="label-text">Company Logo</p>
          <button
            type="button"
            className="p-button-outlined p-mt-2 upload-btn"
            onClick={() => fileInputRef.current.click()}>
            Upload logo
          </button>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
      </div>

      {preview && (
        <div
          className="dialog"
          style={{ display: showEditor ? "block" : "none" }}>
          <div className="dialog-header">Profile Picture</div>
          <div className="avatar-editor-container">
            <img
              className="avatar-editor-image"
              src={preview}
              alt="Profile preview"
            />
            <div className="avatar-editor-slider">
              <input
                type="range"
                min={1}
                max={2}
                step={0.01}
                value={scale}
                onChange={(e) => handleZoom(parseFloat(e.target.value))}
              />
            </div>
          </div>
          <div className="dialog-footer">
            <button
              type="button"
              className="p-button-outlined p-button-secondary p-mr-2"
              onClick={onCancel}>
              Cancel
            </button>
            <button
              type="button"
              className="p-button-outlined"
              onClick={onSave}>
              Save
            </button>
          </div>
        </div>
      )}
    </ProfilePicUploader>
  );
});

const ProfilePicUploader = styled.div`
  .profile-picture-upload-div {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    margin-top: 3em;
    margin-bottom: 3em;
  }
  .profile-pic-details {
    padding-top: 1.8em;
  }
  .display-profile-pic {
    width: 150px;
    height: 150px;
    background: #d9d9d9;
    border-radius: 50%;
  }
  .no-profile-pic {
    width: 150px;
    height: 150px;
    background: #d9d9d9;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .no-img {
    color: grey;
  }
  .upload-btn {
    width: 127px;
    height: 48px;
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
    line-height: 26px;
    background: #60b801;
    border-radius: 5px;
    align-items: center;
    padding: 11px 14px;
  }
  .label-text {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 29px;
    color: #404040;
  }
  .dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 9999;
  }
  .dialog-header {
    padding: 20px;
    font-size: 20px;
    font-weight: bold;
    background-color: #f0f0f0;
  }
  .avatar-editor-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100% - 130px);
  }
  .avatar-editor-image {
    max-width: 100%;
    max-height: 100%;
  }
  .avatar-editor-slider {
    width: 100%;
    padding: 0 20px;
    margin-top: 20px;
  }
  .dialog-footer {
    display: flex;
    justify-content: flex-end;
    padding: 20px;
    background-color: #f0f0f0;
  }
`;

export default ProfilePictureUploader;
