import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/coar-logo.png";
import StudentHome from "../../containers/StudentHome";
import StudentNotice from "../../containers/StudentNotice";
import { useLogin, useRole } from "../context/Context.provider";
import RouteDefault from "./RouteDefault";


const { Header, Content, Footer } = Layout;
const RouteStudent = () => {
  const { setIsLogin } = useLogin();
  const { setIsAdmin } = useRole();
  const navigate = useNavigate();

  const closeSession = () => {
    setIsLogin(false);
    setIsAdmin(false);
    navigate("/");
    localStorage.clear();
  };

  const items = [
    {
      key: "1",
      label: <Link to="/student">Inicio</Link>,
    },
    {
      key: "2",
      label: <Link to="/student/notice">Noticia</Link>,
    },
    {
      key: "3",
      label: "Cerrar sesión",
      onClick: () => {
        closeSession();
      },
    },
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img src={logo} alt="logo" className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        ></Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/student" element={<StudentHome />} />
            <Route path="/student/notice" element={<StudentNotice />} />
            <Route path="*" element={<RouteDefault />}></Route>
          </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Footer
      </Footer>
    </Layout>
  );
};
export default RouteStudent;
