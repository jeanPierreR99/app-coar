import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Routes, Route, useNavigate } from "react-router-dom";
import logo from '../../assets/images/coar-logo.png'


const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `menu ${index + 1}`,
}));
const RouteStudent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img src={logo} alt="logo" className='demo-logo' />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: '0 48px',
        }}
      >
        <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Inicio</Breadcrumb.Item>
          <Breadcrumb.Item>otro</Breadcrumb.Item>
          <Breadcrumb.Item>otro</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         <Routes>
        {/* <Route path="/admin" element={<HomeClient />} />
        <Route path="/admin/campus" element={<TableCampus />} />
        <Route path="/admin/dependence" element={<TableDependence />} />
        <Route path="/admin/profile-personal" element={<ProfilePersonal />} />
        <Route path="/admin/roles" element={<TableRoles />} />
        <Route path="/admin/equipment" element={<TableEquipment />} />
        <Route path="/admin/request" element={<Request />} />
        <Route path="/admin/binnacle" element={<TableBinnacle />} />
        <Route path="*" element={<DefaultPage />}></Route> */}
      </Routes>
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
       Footer
      </Footer>
    </Layout>
  );
};
export default RouteStudent;