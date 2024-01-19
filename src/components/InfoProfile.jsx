import React, { useState } from "react";
import { AndroidOutlined, AlignLeftOutlined, AppstoreAddOutlined, FileImageOutlined, UserAddOutlined } from "@ant-design/icons";
const InfoPorofile = () => {
  return (
    <div style={{ background: "#f5f5f5", color: "#555555", padding: "20px" }}>
      <div>
        <UserAddOutlined></UserAddOutlined> Nombres: anonimo
      </div>
      <div>
        <AlignLeftOutlined></AlignLeftOutlined> Apellidos: anonimo
      </div>
      <div>
        <UserAddOutlined></UserAddOutlined> Edad: anonimo
      </div>
      <div>
        <UserAddOutlined></UserAddOutlined> correo: anonimo@gmail.com
      </div>
    </div>
  );
};
export default InfoPorofile;
