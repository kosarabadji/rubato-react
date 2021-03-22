import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import TopicMenu from "../Navbar/TopicMenu";
import Nav from "../Navbar/Nav/Nav";
import Sidebar from "../Navbar/Sidebar/Sidebar";
import UpdateProfileForm from "../Profile/UpdateProfileForm/UpdateProfileForm";
import ProfileContainer from "../Profile/ProfileContainer";
import FullProfile from "../Profile/FullProfile/FullProfile";

import { menuIcons } from "../../assets/icons";
import "./index.sass";

const DashboardContainer = () => {
  let renderMenuPage;
  const [currentPage, setCurrentPage] = useState(null);
  const [isFullProfile, setIsFullProfile] = useState(false);

  useEffect(() => {
    //we will send a request to the api, if there is no account data, then we set setIsFullProfile = false
    setIsFullProfile(true);
  }, []);

  switch (currentPage) {
    case "Profile":
      isFullProfile
        ? (renderMenuPage = (
            <ProfileContainer onSetCurrentPage={setCurrentPage} />
          ))
        : (renderMenuPage = <FullProfile onSetCurrentPage={setCurrentPage} />);
      break;
    case "UpdateProfile":
      renderMenuPage = <UpdateProfileForm />;
      break;
    default:
      renderMenuPage = "test";
  }

  const topics = [
    { url: "/", title: "Rubato", icon: menuIcons.iconLogo },
    { url: "/dashboard", title: "Dashboard", icon: menuIcons.dashboard },
    { url: "/contracts", title: "Contracts", icon: menuIcons.contracts },
    { url: "/message", title: "Message", icon: menuIcons.message },
    { url: "/gigs", title: "Gigs", icon: menuIcons.gigs },
    { url: "/favourites", title: "Favourites", icon: menuIcons.favourites },
    { url: "/explore", title: "Explore", icon: menuIcons.explore },
    { url: "/profile", title: "Profile", icon: menuIcons.profile },
    { url: "/logout", title: "Log out", icon: menuIcons.logout },
  ];

  const [selectedKey, setSelectedKey] = useState("");
  const changeSelectedKey = (event, title) => {
    setCurrentPage(title);
    const key = event.key;
    setSelectedKey(key);
  };

  const Menu = (
    <TopicMenu
      topics={topics}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );

  return (
    <div className="navbar-wrapper">
      <Layout className="navbar-layout">
        <Sidebar menu={Menu} />
        <div className="navbar-layout-wrapper">
          <Nav menu={Menu} pageName={currentPage} />
          <Layout.Content className="content">{renderMenuPage}</Layout.Content>
        </div>
      </Layout>
    </div>
  );
};

export default DashboardContainer;
