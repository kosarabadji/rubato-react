import React from "react";
// import { Link } from "react-router-dom";
import { Menu } from "antd";

const TopicMenu = (props) => {
  const { topics, selectedKey, changeSelectedKey } = props;
  const styledTopics = [];
  topics.forEach((topic, index) =>
    styledTopics.push(
      <Menu.Item
        key={index}
        onClick={(e) => changeSelectedKey(e, topic.title)}
        className="menu-links"
      >
        {/* <Link to={topic.url}> */}
        <div className="menu-item-with-icon">
          {topic.icon}
          <div className="menu-item-title">{topic.title}</div>
        </div>
        {/* </Link> */}
      </Menu.Item>
    )
  );

  return (
    <Menu mode="inline" selectedKeys={[selectedKey]} className="menu-wrapper">
      {styledTopics}
    </Menu>
  );
};
export default TopicMenu;
