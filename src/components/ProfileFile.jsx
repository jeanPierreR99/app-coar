import React from "react";
import { Card, Typography } from "antd";
import { FileProtectOutlined } from "@ant-design/icons";

const { Text } = Typography;

const ProfileFile = ({ title, url, date }) => {
  return (
    <Card
      title={<Text style={{ color: "blue" }}>{title}</Text>}
      style={{ width: 300 }}
    >
      <Text strong>Link:</Text>
      <a style={{ fontSize: "1.2rem" }} target="__blank" href={url}>
        {" "}
        <FileProtectOutlined />
      </a>
      <br />
      <Text strong>Fecha:</Text> {date}
    </Card>
  );
};

export default ProfileFile;
