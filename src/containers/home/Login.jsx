import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import logo_coar from "../../assets/images/coar-logo.png";
import {
  useLogin,
  useRole,
  useUser,
} from "../../services/context/Context.provider";
import app from "../../services/firebase/ConectionFirebase";

import {
  collection,
  query,
  where,
  getDocs,
  getFirestore,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const firestore = getFirestore(app);

// const createCollection = async () => {
//   try {
//     const userCollection = collection(firestore, "users");
//     const user = {
//       user_dni: "admin",
//       user_name: "Mario Jesus Ormachea Mejia",
//       user_password: "1234",
//       user_role: "admin",
//     };

//     const docRef = await addDoc(userCollection, user);

//     await updateDoc(doc(userCollection, docRef.id), {
//       user_id: docRef.id,
//     });
//     return true;
//   } catch (e) {
//     console.log(e);
//     return false;
//   }
// };

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const { setIsLogin } = useLogin();
  const { setIsAdmin } = useRole();
  const { setUserLog } = useUser();
  const onFinish = (values) => {
    handleLogin(values.username, values.password);
    // createCollection()
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleStorage = (id, user, role, avatar) => {
    const userStorage = {
      id: id,
      user: user,
      role: role,
      url_avatar: avatar
    };
    localStorage.setItem("user", JSON.stringify(userStorage));
    setUserLog(userStorage);
  };

  const handleLogin = async (user_name, password) => {
    // console.log(user_name, password);

    const citiesRef = collection(firestore, "users");
    const q = query(
      citiesRef,
      where("user_dni", "==", user_name),
      where("user_password", "==", password)
    );

    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        const val = doc.data();
        if (val.user_role == "admin" || val.user_role == "teacher") {
          setIsLogin(true);
          setIsAdmin(true);
          navigate("/admin");
          handleStorage(val.user_id, val.user_name, val.user_role, val.user_url_avatar);
        } else {
          setIsLogin(true);
          navigate("/student");
          handleStorage(val.user_id, val.user_name, val.user_role, val.user_url_avatar);
        }
      });
    } else {
      message.error("credenciales incorrectas");
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
