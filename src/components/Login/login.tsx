import React from "react";
import { Form, Input, Button, Typography } from "antd";

import "./login.sass";
import { Link } from "react-router-dom";
const { Title } = Typography;

interface LoginProps {
  onSubmit: (values: any) => void;
}

const Login: React.FC<LoginProps> = (props) => {
  const { onSubmit } = props;
  return (
    <div className="login-wrapper">
      <div className="form-wrapper">
        <div className="title-wrapper">
          <span className="welcome-title">Welcome</span>
          <Title level={1} className="signin-title">
            Signin to Rubato
          </Title>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your Email!" }]}
          >
            <Input
              className="signin-input"
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
              className="signin-input"
              bordered={false}
            />
          </Form.Item>
          <Form.Item>
            <div className="login-form-forgot-pass">
              <Link to="#" className="login-form-forgot">
                Forgot password?
              </Link>
            </div>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              shape="round"
            >
              Signin
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="signin-bankid-button"
              shape="round"
            >
              or Signin with BankID
            </Button>
          </Form.Item>
          <div className="register-link">
            Already have an account? <Link to="/auth/signup">Register</Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
