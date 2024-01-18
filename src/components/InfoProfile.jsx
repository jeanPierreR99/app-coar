import React, { useState } from "react";
import { AndroidOutlined, AlignLeftOutlined, AppstoreAddOutlined, FileImageOutlined, UserAddOutlined } from "@ant-design/icons";
const InfoPorofile = () => {
  return (
    <div style={{ background: "#f5f5f5", color: "#555555", padding: "20px" }}>
      <div>
        <UserAddOutlined></UserAddOutlined> Nombres: Jean Pierre
      </div>
      <div>
        <AlignLeftOutlined></AlignLeftOutlined> Apellidos: Reyes Frisancho
      </div>
      <div>
        <UserAddOutlined></UserAddOutlined> Edad: 25
      </div>
      <div>
        <UserAddOutlined></UserAddOutlined> correo: alguien@gmail.com
      </div>
    </div>
  );
};
export default InfoPorofile;
