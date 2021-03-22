import React from "react";
import { Layout } from "antd";
import "./sidebar.sass";

const SideBar = (props) => {
  const { menu } = props;
  return (
    <Layout.Sider
      className="sidebar"
      breakpoint={"lg"}
      theme="light"
      collapsedWidth={0}
      trigger={null}
    >
      {menu}
    </Layout.Sider>
  );
};

export default SideBar;
