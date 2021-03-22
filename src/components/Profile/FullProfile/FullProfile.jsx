import React from "react";
import { Button, Avatar, Image } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import "react-h5-audio-player/lib/styles.css";

import "./index.sass";

const FullProfile = (props) => {
  const { onSetCurrentPage } = props;
  return (
    <div className="fullProfile-wrapper">
      <div className="profile-photo">
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
          icon={<AntDesignOutlined />}
          src="https://picsum.photos/seed/picsum/200/300"
        />
      </div>
      <div className="content-wrapper">
        <div className="content-left-wrapper">
          <div className="profile-name-genre-wrapper">
            <div className="profile-name">Alber Gill</div>
            <div className="profile-genre">Jazz, Acoustic, Metal</div>
          </div>
          <div className="profile-bio">
            <div className="bio-text">
              Nullam amet arcu nunc gravida ut ullamcorper. Aliquam volutpat
              venenatis tortor, adipiscing dui convallis. Odio etiam tincidunt
              mattis vitae sapien. Cursus cras scelerisque dictum aliquam vel
              nulla. Diam nec sit mauris adipiscing rhoncus arcu. Adipiscing
              rhoncus posuere cras tellus ornare accumsan. Vitae volutpat ac
            </div>
          </div>
          <div className="profile-photos-wrapper">
            <Image.PreviewGroup>
              <Image src="https://picsum.photos/id/238/200/300" />
              <Image src="https://picsum.photos/id/237/200/300" />
            </Image.PreviewGroup>
          </div>
        </div>
        <div className="content-right-wrapper">
          <div className="profile-right-genre-wrapper">
            <div className="right-title">Genre</div>
            <div className="right-content">Jazz, Acoustic, Metal</div>
          </div>
          <div className="profile-right-gender-wrapper">
            <div className="right-title">Gender</div>
            <div className="right-content">Female</div>
          </div>
          <div className="profile-right-date-of-birth">
            <div className="right-title">Date of birth</div>
            <div className="right-content">19/12/90</div>
          </div>
          <div className="profile-right-address">
            <div className="right-title">Address</div>
            <div className="right-content">test address</div>
          </div>
          <div className="profile-right-phone">
            <div className="right-title">Phone Number</div>
            <div className="right-content">+3332550005050</div>
          </div>
          <div className="profile-right-btn">
            <Button shape="round" onClick={() => onSetCurrentPage("UpdateProfile")}> Edit Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullProfile;
