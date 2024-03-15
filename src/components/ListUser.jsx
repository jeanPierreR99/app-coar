import React, { useEffect, useState } from "react";
import { getCollectionAllUser } from "../services/firebase/Functions";
import { Col, Typography, Row, Avatar } from "antd";
import { useNavigate } from "react-router-dom";

const CardUser = ({ user, onClick }) => {
  if (user.user_role != "admin") {
    return (
      <Col xs={24} style={{ marginBottom: "10px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "5px",
            borderRadius: "6px",
            backgroundColor: "white",
            cursor: "pointer",
          }}
          onClick={onClick}
        >
          <Avatar
            src={user.user_url_avatar}
            size={44}
            style={{ marginRight: "16px" }}
          />
            <Typography.Text style={{"color":"blue","opacity":".8"}} >{user.user_name}</Typography.Text>
        </div>
      </Col>
    );
  }
};

const ListUser = () => {
  const [users, setUsers] = useState([]);
  const navigation = useNavigate();

  const getAllUser = async () => {
    await getCollectionAllUser(setUsers);
  };

  const sendId = (id) => {
    navigation(`/student/profile?id=${id}`);
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <Row gutter={16}>
      {users.map((user) => (
        <CardUser
          key={user.user_id}
          user={user}
          onClick={() => {
            sendId(user.user_id);
          }}
        ></CardUser>
      ))}
    </Row>
  );
};

export default ListUser;
