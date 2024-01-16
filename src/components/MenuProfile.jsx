import React, { useState } from "react";
import { AndroidOutlined, AlignLeftOutlined, AppstoreAddOutlined, FileImageOutlined, UserAddOutlined, AlignRightOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import ProfilePublication from "./ProfilePublication";
import ListTeacher from "./ListTeacher";

const { TabPane } = Tabs;

const TabContent1 = () => (
  <div style={{display:"flex"}}>
    <div style={{width:"40%", height:"300px", paddingRight:"20px"}}>
     <div style={{border: "1px #8c8c8c59 solid", padding:"20px"}}>
      <div><UserAddOutlined></UserAddOutlined> Nombres: Jean Pierre</div>
      <div><AlignLeftOutlined></AlignLeftOutlined> Apellidos: Reyes Frisancho</div>
      <div><UserAddOutlined></UserAddOutlined> Edad: 25</div>
      <div><UserAddOutlined></UserAddOutlined> correo: alguien@gmail.com</div>
      </div>
      <br />
      <ListTeacher></ListTeacher>
    </div>
    <div style={{width:"60%"}}>
      <ProfilePublication></ProfilePublication>
      <ProfilePublication></ProfilePublication>
    </div>
  </div>
);

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
            <FileImageOutlined style={{marginRight:"10px"}} />
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
            <AppstoreAddOutlined style={{marginRight:"10px"}} />
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
