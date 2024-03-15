import React, { useEffect } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Routes, Route, useNavigate, Link } from "react-router-dom";
import logo from "../../assets/images/coar-logo.png";
import StudentHome from "../../containers/StudentHome";
import StudentNotice from "../../containers/StudentNotice";
import { useCollectionPostLimit, useLogin, useRole } from "../context/Context.provider";
import RouteDefault from "./RouteDefault";
import AdminProfile from "../../containers/admin/AdminProfile";
import { getCollectionPostLimit } from "../firebase/Functions";


const { Header, Content, Footer } = Layout;
const RouteStudent = () => {
  const { setIsLogin } = useLogin();
  const { setIsAdmin } = useRole();
  const {setCollectionPostLimit} = useCollectionPostLimit();
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

  const getPostLimit = async () => {
    await getCollectionPostLimit(setCollectionPostLimit, 3);
  };

  useEffect(() => {
    getPostLimit();
  }, []);

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
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
            justifyContent:"flex-end"
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 28px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "18px 0",
          }}
        ></Breadcrumb>
        <div
          style={{
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Routes>
            <Route path="/student" element={<StudentHome />} />
            <Route path="/student/notice" element={<StudentNotice />} />
            <Route path="/student/profile" element={<AdminProfile />} />
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
