import React from "react";
import Profile from "./Profile";

const ProfileContainer = (props) => {
  return (
    <Profile onSetCurrentPage={props.onSetCurrentPage}/>
  )
};

export default ProfileContainer;