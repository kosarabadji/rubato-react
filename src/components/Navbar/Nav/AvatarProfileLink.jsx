import React from "react";
import { Menu, Dropdown, Avatar } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import "./avatar.sass";

const menu = (
  <Menu>
    <Menu.Item>
      <Link to="#">
        1st menu item
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="#">
        2nd menu item
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="#">
        3rd menu item
      </Link>
    </Menu.Item>
  </Menu>
);

const AvatarProfileLink = () => {
  return (
    <Dropdown overlay={menu}>
      <div className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        <div className="profile-link-wrapper">
          <Avatar icon={<UserOutlined />} size={40} className="profile-avatar"/>
          <div className="profile-fullname">Albert Gill<DownOutlined /></div>
        </div>
      </div>
    </Dropdown>
  );
};

export default AvatarProfileLink;