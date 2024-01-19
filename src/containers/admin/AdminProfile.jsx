import React, { useEffect, useRef, useState } from "react";
import ImageProfile from "../../components/ImageProfile";
import ImagePhotoProfile from "../../components/ImagePhotoProfile";
import MenuProfile from "../../components/MenuProfile";
import { Col, Row } from "antd";

const AdminProfile = () => {
  return (
    <Row>
      <Col xs={24} className="custom-image">
        <ImageProfile></ImageProfile>
        <ImagePhotoProfile></ImagePhotoProfile>
        </Col>
        <Col xl={24}>
        <MenuProfile></MenuProfile>
        </Col>
    </Row>
  );
};
export default AdminProfile;
{/* <Col xs={24} sm={12} md={8} lg={6} xl={4}> */}