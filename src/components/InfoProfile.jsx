import React, { useState } from "react";
import { AndroidOutlined, AlignLeftOutlined, AppstoreAddOutlined, FileImageOutlined, UserAddOutlined } from "@ant-design/icons";
import { useCollectionUserOne } from "../services/context/Context.provider";
import { Col, Row, Tag, Typography } from "antd";
const InfoPorofile = () => {

  const {collectionUserOne, setCollectionUserOne} = useCollectionUserOne()
  return (
    <Row style={{ background: "white", color: "#555555", padding: "20px", borderRadius:"6px", gap:"5px" }}>
      <Col sm={24}>
       <Tag color="#108ee9"><Typography.Text strong style={{"color":"white"}}><UserAddOutlined></UserAddOutlined> Nombres:</Typography.Text></Tag> {collectionUserOne&&collectionUserOne[0].user_name}
      </Col>
      <Col sm={24}>
       <Tag color="#108ee9"><Typography.Text strong style={{"color":"white"}}><AlignLeftOutlined></AlignLeftOutlined> Apellidos:</Typography.Text></Tag> {collectionUserOne&&collectionUserOne[0].user_lastname}
      </Col>
      <Col sm={24}>
       <Tag color="#108ee9"><Typography.Text strong style={{"color":"white"}}><UserAddOutlined></UserAddOutlined> Edad:</Typography.Text></Tag> {collectionUserOne&&collectionUserOne[0].user_age}
      </Col>
      <Col sm={24}>
       <Tag color="#108ee9"><Typography.Text strong style={{"color":"white"}}><UserAddOutlined></UserAddOutlined> Especilidad:</Typography.Text></Tag> {collectionUserOne&&collectionUserOne[0].user_role}
      </Col>
    </Row>
  );
};
export default InfoPorofile;
