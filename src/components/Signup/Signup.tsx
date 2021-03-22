import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Typography } from "antd";

import "./signup.sass";
const { Title } = Typography;

interface SignupProps {
  onSubmit: (values: any) => void;
}

const Signup: React.FC<SignupProps> = (props) => {
  const { onSubmit } = props;
  return (
    <div className="login-wrapper">
      <div className="form-wrapper">
        <div className="title-wrapper">
          <span className="welcome-title">Welcome</span>
          <Title level={1} className="auth-title">
            Signup to Rubato
          </Title>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <Form.Item
            name="fullname"
            rules={[{ required: true, message: "Please input your Fullname!" }]}
          >
            <Input
              className="auth-input"
              placeholder="Fullname"
              bordered={false}
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              className="auth-input"
              placeholder="Email"
              bordered={false}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              type="password"
              placeholder="Password"
              className="auth-input"
              bordered={false}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              shape="round"
            >
              Signup
            </Button>
          </Form.Item>
          <Form.Item className="form-item-with-bankid">
            <Button
              type="primary"
              htmlType="submit"
              className="auth-bankid-button"
              shape="round"
            >
              or Register with BankID
            </Button>
          </Form.Item>
          <div className="login-link">
            Already have an account? <Link to="/auth/login">Login</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
