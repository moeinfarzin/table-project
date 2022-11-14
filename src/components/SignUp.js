import { Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import "antd/dist/antd.min.css";
import "./Login.css"
import React from 'react';
import { Link } from "react-router-dom"

const SignUp = () => {
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

    return (
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
                    placeholder="repeat Password"
                />
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}
            >
                <Input
                    
                    type="email"
                    placeholder="@ email"
                />
            </Form.Item>


            <Form.Item>
                <Link to="/dashboard" type="primary" htmlType="submit" className="btn-submit">
                    Sign Up
                </Link>

            </Form.Item>
        </Form>
    )
}
export default SignUp