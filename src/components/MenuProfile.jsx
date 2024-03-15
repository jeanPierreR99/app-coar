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
import ButtonPublication from "./ButtonPublication";
import { useCollectionPost } from "../services/context/Context.provider";
import TapContentPost from "./TapContentPost";
import TapContentCourses from "./TapContentCourses";
const { TabPane } = Tabs;

// const comentariosJean = [
//   { author: "Miguel", content: "¡Excelente publicación!", datetime: "Hoy" },
//   { author: "Luis", content: "Me encanta", datetime: "Ayer" },
// ];

// const comentariosAnggie = [
//   { author: "Jean", content: "¡Excelente publicación!", datetime: "Hoy" },
//   { author: "leonardo salas", content: "Me encanta", datetime: "Ayer" },
// ];

// var post = [
//   {
//     userPost: "JEAN PIERRE REYES",
//     urlPhoto:
//       "https://static.vecteezy.com/ti/gratis-vektor/t2/2002403-mann-mit-bart-avatar-charakter-isoliert-symbol-kostenlos-vektor.jpg",
//     urlPost:
//       "https://d1ih8jugeo2m5m.cloudfront.net/2022/10/los-tipos-de-anuncios-publicitarios-700x396.jpg",
//     comentarios: [
//       { author: "Miguel", content: "¡Excelente publicación!", datetime: "Hoy" },
//       { author: "Luis", content: "Me encanta", datetime: "Ayer" },
//     ],
//   },
//   {
//     userPost: "ANGGIE CASTILLO",
//     urlPhoto:
//       "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
//     urlPost:
//       "https://alexissaavedra.com/wp-content/uploads/2021/05/tipos-de-publicaciones-en-Instagram.png",
//     comentarios: [
//       { author: "Jean", content: "¡Excelente publicación!", datetime: "Hoy" },
//       { author: "leonardo salas", content: "Me encanta", datetime: "Ayer" },
//     ],
//   },
//   {
//     userPost: "ANGGIE CASTILLO",
//     urlPhoto:
//       "https://t3.ftcdn.net/jpg/06/17/13/26/360_F_617132669_YptvM7fIuczaUbYYpMe3VTLimwZwzlWf.jpg",
//     urlPost:
//       "https://alexissaavedra.com/wp-content/uploads/2021/05/tipos-de-publicaciones-en-Instagram.png",
//     comentarios: [
//       { author: "Jean", content: "¡Excelente publicación!", datetime: "Hoy" },
//       { author: "leonardo salas", content: "Me encanta", datetime: "Ayer" },
//       { author: "user", content: "Me aaaaaaaa", datetime: "..." },
//     ],
//   },
// ];

// const TabContent1 = () => {
//   const {collectionPost} = useCollectionPost();
//   console.log(collectionPost)
//   return (
//     <Row gutter={20}>
//       <Col xs={24} md={12} lg={9} xl={12}>
//         <InfoPorofile></InfoPorofile>
//         <br />
//         <ListTeacher></ListTeacher>
//       </Col>
//       <Col xs={24} md={12} lg={15} xl={12}>
//         <ButtonPublication></ButtonPublication>
//         {collectionPost.map((data, index) => (
//           <ProfilePublication
//             key={index}
//             userPost={data.user_id}
//             urlPhoto={""}
//             urlPost={data.post_image_url}
//             comentario={data.comments}
//           ></ProfilePublication>
//         ))}
//       </Col>
//     </Row>
//   );
// };
/* <Col xs={24} sm={12} md={8} lg={6} xl={4}> */
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
        <TapContentPost />
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
        <TapContentCourses />
      </TabPane>
    </Tabs>
  );
};

export default MenuProfile;
