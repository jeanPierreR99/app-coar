import React, { useEffect, useRef, useState } from "react";
import ImageProfile from "../../components/ImageProfile";
import ImagePhotoProfile from "../../components/ImagePhotoProfile";
import MenuProfile from "../../components/MenuProfile";

const AdminProfile = () => {
  return (
    <div className="content-admin-profile">
      <div style={{position:"relative"}}>
        <ImageProfile></ImageProfile>
        <ImagePhotoProfile></ImagePhotoProfile>
        </div>
        <MenuProfile></MenuProfile>
    </div>
  );
};
export default AdminProfile;
