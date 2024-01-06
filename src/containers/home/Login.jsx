import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import logo_coar from "../../assets/images/coar-logo.png";
import { useLogin, useRole } from "../../services/context/Context.provider";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { setIsLogin } = useLogin();
  const { setIsAdmin } = useRole();
  const onFinish = (values) => {
    console.log(values);
    handleLogin(values.username, values.password);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleStorage = (user, token, role) => {
    const userStorage = {
      user: user,
      token: token,
      role: role,
    };
    localStorage.setItem("user", JSON.stringify(userStorage));
  };

  const handleLogin = async (email, password) => {
    console.log(email, password);
    if (email == "student" && password == "1234") {
      setIsLogin(true);
      navigate("/student");
    } else if (email == "admin" && password == "1234") {
      setIsLogin(true);
      setIsAdmin(true)
      navigate("/admin");
    }
    else{
      alert("credenciales incorrectas")
    }
  };

  return (
    <center className="content-login">
      <div className="img-absolute"></div>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <img src={logo_coar} className="img-logo-horizontal" alt="" />
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        {error && (
          <p style={{ color: "red", opacity: ".7" }}>
            Credenciales Incorrectas.
          </p>
        )}
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Recordarme</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Olvidaste tu contraseña
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Ingresar
          </Button>
        </Form.Item>
      </Form>
    </center>
  );
};
export default Login;
