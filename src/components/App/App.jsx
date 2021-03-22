import React from "react";
import { Layout } from "antd";

import "./App.sass";
import "antd/dist/antd.min.css";
import ApplicationRoutes from "../Routes/Routes";

const { Content } = Layout;

const App = () => {
  return (
    <Layout className="app">
      <Content>
        <ApplicationRoutes />
      </Content>
    </Layout>
  );
};

export default App;
