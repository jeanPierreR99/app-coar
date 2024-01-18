import React, { useState } from "react";
import {
  AndroidOutlined,
  AlignLeftOutlined,
  AppstoreAddOutlined,
  FileImageOutlined,
  UserAddOutlined,
  AlignRightOutlined,
} from "@ant-design/icons";
import { Col, Row, Tabs } from "antd";
import ProfilePublication from "./ProfilePublication";
import ListTeacher from "./ListTeacher";
import InfoPorofile from "./InfoProfile";

const { TabPane } = Tabs;

const comentariosJean = [
  { author: "Miguel", content: "¡Excelente publicación!", datetime: "Hoy" },
  { author: "Luis", content: "Me encanta", datetime: "Ayer" },
  // ... otros comentarios
];

const comentariosAnggie = [
  { author: "Jean", content: "¡Excelente publicación!", datetime: "Hoy" },
  { author: "leonardo salas", content: "Me encanta", datetime: "Ayer" },
  // ... otros comentarios
];

const TabContent1 = () => (
  <Row gutter={20}>
    <Col xs={24} md={12} lg={9} xl={12}>
      <InfoPorofile></InfoPorofile>
      <br />
      <ListTeacher></ListTeacher>
    </Col>
    <Col xs={24} md={12} lg={15} xl={12}>
      <ProfilePublication
        userPost={"Jean pierre Reyes"}
        urlPhoto={
          "https://static.vecteezy.com/ti/gratis-vektor/t2/2002403-mann-mit-bart-avatar-charakter-isoliert-symbol-kostenlos-vektor.jpg"
        }
        urlPost={
          "https://d1ih8jugeo2m5m.cloudfront.net/2022/10/los-tipos-de-anuncios-publicitarios-700x396.jpg"
        }
        comentario={comentariosJean}
      ></ProfilePublication>
      <ProfilePublication
        userPost={"Anggie Castillo"}
        urlPhoto={
          "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg"
        }
        urlPost={
          "https://alexissaavedra.com/wp-content/uploads/2021/05/tipos-de-publicaciones-en-Instagram.png"
        }
        comentario={comentariosAnggie}
      ></ProfilePublication>
    </Col>
  </Row>
);
{
  /* <Col xs={24} sm={12} md={8} lg={6} xl={4}> */
}
const TabContent2 = () => (
  <div>
    <h2>Contenido del Tab 2</h2>
  </div>
);

const MenuProfile = () => {
  return (
    <Tabs defaultActiveKey="1">
      <TabPane
        tab={
          <span>
            <FileImageOutlined style={{ marginRight: "10px" }} />
            Publicaciones
          </span>
        }
        key="1"
      >
        <TabContent1 />
      </TabPane>
      <TabPane
        tab={
          <span>
            <AppstoreAddOutlined style={{ marginRight: "10px" }} />
            Cursos
          </span>
        }
        key="2"
      >
        <TabContent2 />
      </TabPane>
    </Tabs>
  );
};

export default MenuProfile;
