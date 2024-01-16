import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import logo_coar from "../../assets/images/coar-logo.png";
import { useLogin, useRole } from "../../services/context/Context.provider";
import app from "../../services/firebase/ConectionFirebase";

import { collection, query, where, getDocs, getFirestore } from "firebase/firestore";

const firestore = getFirestore(app);

// const createCollection = async () => {
//   try {
//     const collectionRef = collection(firestore, "users");

//     await addDoc(collectionRef, {
//       user_name: "admin",
//       user_user: "Mario Jesus Ormachea Mejia",
//       user_password: "1234",
//       user_rol: "admin",
//     });

//     console.log("Colección creada exitosamente");
//   } catch (error) {
//     console.error("Error al crear la colección: ", error);
//   }
// };

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { setIsLogin } = useLogin();
  const { setIsAdmin } = useRole();
  const onFinish = (values) => {
    console.log(values);
    handleLogin(values.username, values.password);
    // createCollection()
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleStorage = (user, role) => {
    const userStorage = {
      user: user,
      role: role,
    };
    localStorage.setItem("user", JSON.stringify(userStorage));
  };

  const handleLogin = async (user_name, password) => {
    console.log(user_name, password);

    const citiesRef = collection(firestore, "users");
    const q = query(
      citiesRef,
      where("user_name", "==", user_name),
      where("user_password", "==", password)
    );

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    if(!querySnapshot.empty){
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        const val = doc.data();
        if(val.user_rol == "admin"){
          setIsLogin(true);
            setIsAdmin(true)
            navigate("/admin");
            handleStorage(val.user_user, val.user_rol)
        }
        else{
          setIsLogin(true);
            navigate("/student");
            handleStorage(val.user_user, val.user_rol)
        }
      });
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
