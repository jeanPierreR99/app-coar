import React, { useState } from "react";
import { List, Avatar, Button, Input, Space, Image } from "antd";
import { CommentOutlined, UserOutlined } from "@ant-design/icons";
import { addCommentToPost } from "../services/firebase/Functions";

const ProfilePublication = ({
  userMain,
  idPost,
  userPost,
  descriptionPost,
  urlPhoto,
  datePost,
  urlPost,
  comentario,
  urlMain,
}) => {
  const [commentValue, setCommentValue] = useState("");
  const [visibleComments, setVisibleComments] = useState(4);
  const [commentsVisible, setCommentsVisible] = useState(false);

  const handleCommentChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleAddComment = async () => {
    if (commentValue.trim() !== "") {
      const objComment = {
        author: userMain,
        content: commentValue,
        urlProfile: urlMain,
        datetime: new Date().toLocaleString(),
      };

      await addCommentToPost(idPost, objComment);

      setCommentValue("");
    }
  };

  const handleLoadMoreComments = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 4);
  };

  const visibleCommentsData = comentario?.slice(0, visibleComments);

  return (
    <div
      style={{
        background: "white",
        borderRadius: "6px",
        padding: "15px",
        marginBottom: "15px",
      }}
    >
      <List.Item
        key="post"
        extra={
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Avatar
                icon={<UserOutlined />}
                src={urlPhoto}
                alt="image perfil"
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
              />
              <div>
                <p style={{ color: "blue", cursor: "pointer" }}>{userPost}</p>
                <p style={{ color: "#a7a7a7" }}>{datePost}</p>
              </div>
            </div>
            <p>{descriptionPost}</p>
            <Image width={"100%"} height={"400px"} src={urlPost} />
          </div>
        }
        avatar={<Avatar icon={<UserOutlined />} />}
      />
      <p
        style={{
          textAlign: "center",
          cursor: "pointer",
          color: "blue",
          opacity: ".6",
          marginTop: "10px",
        }}
        type="primary"
        onClick={() => setCommentsVisible(!commentsVisible)}
      >
        <CommentOutlined />
        {commentsVisible ? "Ocultar comentarios" : "Mostrar comentarios"}
      </p>
      {comentario
        ? commentsVisible && (
            <List
              dataSource={visibleCommentsData}
              header={`${visibleCommentsData.length} ${
                visibleCommentsData.length === 1 ? "Comentario" : "Comentarios"
              }`}
              itemLayout="horizontal"
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        icon={<UserOutlined />}
                        src={item.urlProfile}
                        style={{ borderRadius: "50%" }}
                      />
                    }
                    title={item.author}
                    description={
                      <>
                        {item.content}
                        <div
                          style={{
                            color: "gray",
                            fontSize: "10px",
                            opacity: ".7",
                          }}
                        >
                          {item.datetime}
                        </div>
                      </>
                    }
                  />
                </List.Item>
              )}
            >
              {visibleComments < comentario.length && (
                <p
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    color: "blue",
                    opacity: ".6",
                  }}
                  onClick={handleLoadMoreComments}
                >
                  Cargar más comentarios
                </p>
              )}
            </List>
          )
        : "no hay comentario"}
            <Space.Compact
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
              >
                <Input value={commentValue} onChange={handleCommentChange} />
                <Button type="primary" onClick={handleAddComment}>
                  Comentar
                </Button>
              </Space.Compact>
    </div>
  );
};

export default ProfilePublication;
