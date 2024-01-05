import React, { useState,useEffect } from 'react';
import {
  CustomerServiceOutlined,
  DeploymentUnitOutlined,
  GroupOutlined,
  HomeOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  RotateRightOutlined,
  ScheduleOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { Routes, Route, useNavigate } from "react-router-dom";
import logo from '../../assets/images/coar-logo.png'
import ChartLine from "../../components/ChartLine"
const { Header, Sider, Content } = Layout;

function RouteAdmin() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  // const {setIsLogin} = useLogin();
  // const {setIsAdmin} = useRole();
  // const [user, setUser] = useState({})

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // const closeSession = () => {
  //   localStorage.clear();
  //   setIsLogin(false);
  //   setIsAdmin(false);
  //   navigate("/login");
  // };

  // const getStorage = () => {
  //   const objStorage = localStorage.getItem("user");
  //   if (objStorage) {
  //     const objParse = JSON.parse(objStorage);
  //     console.log(objParse)
  //     setUser(objParse)
  //   }
  // };
  // useEffect(() => {
  //   getStorage();
  // }, []);

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed} style={{minHeight:"100vh"}}>
        <div className='content-desc' style={{display:collapsed?'none':''}}>
          <img src={logo} alt="logo" className='image-logo' />
          <span className="name-user">Reyes frisancho kevin jean pierre</span>
          <span className="name-role">Administrador</span>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          theme="dark"
          style={{height:"auto"}}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'nuevo',
              onClick: ()=>{navigate("/admin")}
            },
            {
              key: '2',
              icon: <ScheduleOutlined />,
              label: 'Students',
              onClick: ()=>{navigate("/admin/campus")}
            },
            {
              key: '3',
              icon: <DeploymentUnitOutlined />,
              label: 'Docentes',
              onClick: ()=>{navigate("/admin/dependence")}
            },
            {
              key: '4',
              icon: <UserOutlined />,
              label: 'Galeria',
              onClick: ()=>{navigate("/admin/profile-personal")}
            },
            {
              key: '5',
              icon: <UserSwitchOutlined />,
              label: 'Publicaciones',
              onClick: ()=>{navigate("/admin/roles")}
            },
            {
              key: '9',
              icon: <LogoutOutlined />,
              label: 'Cerrar sesión',
              style:{color:"red",fontWeight: "800"},
              onClick: ()=>{closeSession()}
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background:"white"
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
             <Routes>
        <Route path="/admin" element={<ChartLine />} />
        {/* <Route path="/admin/campus" element={<TableCampus />} />
        <Route path="/admin/dependence" element={<TableDependence />} />
        <Route path="/admin/profile-personal" element={<ProfilePersonal />} />
        <Route path="/admin/roles" element={<TableRoles />} />
        <Route path="/admin/equipment" element={<TableEquipment />} />
        <Route path="/admin/request" element={<Request />} />
        <Route path="/admin/binnacle" element={<TableBinnacle />} />
        <Route path="*" element={<DefaultPage />}></Route> */}
      </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default RouteAdmin;
