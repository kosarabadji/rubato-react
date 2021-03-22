import React, { useState } from "react";
import { Upload, message, Avatar } from "antd";
import { LoadingOutlined, UserOutlined } from "@ant-design/icons";

import "./index.sass";

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

const AvatarUpload = () => {
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
    <div className="upload-wrapper">
      {loading ? (
        <LoadingOutlined />
      ) : (
        <Avatar size={88} icon={<UserOutlined />} />
      )}
    </div>
  );

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      className="profile-avatar-uploader"
      showUploadList={false}
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      beforeUpload={beforeUpload}
      onChange={handleChange}
      multiple={false}
    >
      {imageUrl ? (
        <Avatar
          src={imageUrl}
          alt="avatar"
          className="avatar"
        />
      ) : (
        uploadButton
      )}
    </Upload>
  );
};

export default AvatarUpload;
