import React, { useState } from "react";
import AvatarProfileLink from "./AvatarProfileLink";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { iconArrow } from "../../../assets/icons";
import "./nav.sass";

const NavBar = (props) => {
  const { menu, pageName } = props;
  const [visible, setVisible] = useState(false);
  return (
    <nav className="navbar">
      <div className="navbar-wrapper">
        <div className="arrow-mobile">{iconArrow}</div>
        <div className="nav-page-name">{pageName}</div>
        <div className="nav-profile-wrapper">
          <AvatarProfileLink />
        </div>
        <Button
          className="menu"
          type="primary"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
        />
        <Drawer
          title="Rubato"
          placement="left"
          onClick={() => setVisible(false)}
          onClose={() => setVisible(false)}
          visible={visible}
        >
          {menu}
        </Drawer>
      </div>
    </nav>
  );
};

export default NavBar;
