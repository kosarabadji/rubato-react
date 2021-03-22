import React from "react";
import { Card, Button } from "antd";

import "./profile.sass";

const Profile = (props) => {
  const { onSetCurrentPage } = props;
  return (
    <div className="start-profile-wrapper">
      <Card className="welcome-profile-wrapper">
        <div className="welcome-profile-emoji">👋</div>
        <div className="welcome-profile-title">
          Hello Albert,
          <br />
          Welcome to Rubato!
        </div>
        <div className="welcome-profile-second-text">
          Complete your artist data to register your gigs and get an event that
          suits you
        </div>
        <Button
          className="welcome-profile-btn-update-profile"
          shape="round"
          onClick={() => onSetCurrentPage("UpdateProfile")}
        >
          Update Profile
        </Button>
      </Card>
    </div>
  );
};

export default Profile;
