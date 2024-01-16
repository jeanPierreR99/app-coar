import React, { useState } from "react";
import { List, Avatar, Button, Input, Select, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const ProfilePublication = () => {
  const [comments, setComments] = useState([]);
  const [commentValue, setCommentValue] = useState("");
  const [visibleComments, setVisibleComments] = useState(4);

  const handleCommentChange = (e) => {
    setCommentValue(e.target.value);
  };

  const handleAddComment = () => {
    if (commentValue.trim() !== "") {
      setComments((prevComments) => [
        ...prevComments,
        {
          author: "Usuario",
          content: commentValue,
          datetime: new Date().toLocaleString(),
        },
      ]);
      setCommentValue("");
    }
  };

  const handleLoadMoreComments = () => {
    setVisibleComments((prevVisibleComments) => prevVisibleComments + 4);
  };

  const visibleCommentsData = comments.slice(0, visibleComments);

  return (
    <div style={{padding:"15px 0 15px 0", borderBottom:"1px #d7d7d7 solid"}}>
      <List.Item
        key="post"
        extra={
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <img
                style={{ width: "60px", height: "60px", borderRadius: "50%" }}
                src="https://www.comunicarseweb.com/sites/default/files/styles/galeria_noticias/public/biblioteca/images//1437506486_Fanta-Fanta-Taste-Grafica-1.jpg?itok=BQrq6hlk"
                alt="image perfil"
              />
              <div>
              <p style={{ color: "blue", cursor: "pointer" }}>
                Reyes Frisancho Jean Pierre
              </p>
              <p style={{color:"#a7a7a7"}}>15 de enero del 2024</p>
              </div>
            </div>
            <p>
              ¡Hola a todos! ¡Hoy tuve una experiencia increíble explorando
              nuevas tecnologías en la conferencia de desarrollo! 🚀 #Desarrollo
              #Aprendizaje. Estoy emocionado por implementar lo que aprendí en
              mis proyectos. ¿Alguien más estuvo en la conferencia? ¡Compartan
              sus experiencias!
            </p>
            <img
              src="https://www.comunicarseweb.com/sites/default/files/styles/galeria_noticias/public/biblioteca/images//1437506486_Fanta-Fanta-Taste-Grafica-1.jpg?itok=BQrq6hlk"
              alt="Imagen de la publicación"
              style={{ width: "100%", height: "300px", marginBottom: "16px" }}
            />
          </div>
        }
        avatar={<Avatar icon={<UserOutlined />} />}
      />

      <List
        dataSource={visibleCommentsData}
        header={`${visibleCommentsData.length} ${
          visibleCommentsData.length === 1 ? "Comentario" : "Comentarios"
        }`}
        itemLayout="horizontal"
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar icon={<UserOutlined />} />}
              title={item.author}
              description={
                <>
                  {item.content}
                  <div style={{ color: "gray", fontSize: "12px" }}>
                    {item.datetime}
                  </div>
                </>
              }
            />
          </List.Item>
        )}
      />

      {visibleComments < comments.length && (
        <p style={{textAlign:"center", cursor:"pointer", color:"blue", opacity:".6"}}  onClick={handleLoadMoreComments}>
          Cargar más comentarios
        </p>
      )}
      <Space.Compact
        style={{
          width: "100%",
          marginTop:"10px"
        }}
      >
        <Input value={commentValue} onChange={handleCommentChange} />
        <Button type="primary" onClick={handleAddComment}>
          comentar
        </Button>
      </Space.Compact>
    </div>
  );
};

export default ProfilePublication;
