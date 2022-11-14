import { Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.min.css";
import "./Login.css"
import React from 'react';
import { Link } from "react-router-dom"

const Login = () => {


    const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };


  return (
    <div className='container'>
      <div className='btn-container'>
        <Link to="/signup" className="btn-signup">Sign up</Link>
      </div>
      <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Link to="/dashboard" type="primary" htmlType="submit" className="btn-submit">
          Log in
        </Link>
        
      </Form.Item>
    </Form>

    </div>
  );
};

export default Login