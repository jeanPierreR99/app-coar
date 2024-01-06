import React, { useState,useEffect } from 'react';
import {
  CustomerServiceOutlined,
  DeploymentUnitOutlined,
  FileImageOutlined,
  FileMarkdownOutlined,
  FilterOutlined,
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
import AdminHome from '../../containers/admin/AdminHome';
import AdminTeacher from '../../containers/admin/AdminTeacher';
import AdminGalery from '../../containers/admin/AdminGalery';
import AdminPublications from '../../containers/admin/AdminPublications';
import AdminCategory from '../../containers/admin/AdminCategory';
import { useLogin, useRole } from '../context/Context.provider';
const { Header, Sider, Content } = Layout;

function RouteAdmin() {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false);
  const {setIsLogin} = useLogin();
  const {setIsAdmin} = useRole();
  // const [user, setUser] = useState({})

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const closeSession = () => {
    setIsLogin(false);
    setIsAdmin(false);
    navigate("/");
  };

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
              label: 'Inicio',
              onClick: ()=>{navigate("/admin")}
            },
            {
              key: '3',
              icon: <DeploymentUnitOutlined />,
              label: 'Docentes',
              onClick: ()=>{navigate("/admin/teacher")}
            },
            {
              key: '4',
              icon: <FileImageOutlined />,
              label: 'Galeria',
              onClick: ()=>{navigate("/admin/galery")}
            },
            {
              key: '5',
              icon: <FileMarkdownOutlined />,
              label: 'Publicaciones',
              onClick: ()=>{navigate("/admin/publications")}
            },
            {
              key: '6',
              icon: <FilterOutlined />,
              label: 'Categorias',
              onClick: ()=>{navigate("/admin/category")}
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
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/teacher" element={<AdminTeacher />} />
        <Route path="/admin/galery" element={<AdminGalery />} />
        <Route path="/admin/publications" element={<AdminPublications />} />
        <Route path="/admin/category" element={<AdminCategory />} />
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
