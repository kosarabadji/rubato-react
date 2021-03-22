import React, { useState } from "react";
import { Upload, message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import "./index.sass";
import { uploadIcon } from "../../../assets/icons";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

const PhotoUpload = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      getBase64(
        info.file.originFileObj,
        (imageUrl) => setImageUrl(imageUrl),
        setLoading(false)
      );
    }
  };

  const uploadButton = (
    <div className="upload-wrapper-main">
      {loading ? (
        <LoadingOutlined />
      ) : (
        <div style={{ marginTop: 8 }}>{uploadIcon}</div>
      )}
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="profile-main-photo-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
      multiple={false}
    >
      {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
    </Upload>
  );
};

export default PhotoUpload;
