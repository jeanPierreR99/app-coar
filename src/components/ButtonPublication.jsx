import React, { useState } from "react";
import { FormOutlined, ProfileOutlined } from "@ant-design/icons";
import {
  Button,
  Input,
  Modal,
  Tooltip,
  message,
  Space,
  Row,
  Col,
  Upload,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import {
  createCollectionPost,
  createFileStorage,
} from "../services/firebase/Functions";
import { useUser } from "../services/context/Context.provider";


const { Dragger } = Upload;

const ButtonPublication = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [imageSend, setImageSend] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); 
  const [messageApi, contextHolder] = message.useMessage();
  const {userLog} = useUser()

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Publicación agregada",
    });
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    try {
      if (!image) {
        message.error("Por favor, sube una imagen.");
        return;
      }
      setConfirmLoading(true);
      const imageUrl = await createFileStorage(imageSend, userLog);

      if (imageUrl) {
        console.log("Imagen cargada con éxito: " + imageUrl);
        if (createCollectionPost(description, imageUrl, userLog)) {
          setOpen(false);
          setConfirmLoading(false);
          success();
          setDescription("");
          setImage(null);
          setImageSend(null);
          setImagePreview(null);
        } else {
          console.error("error al subir la imagen");
        }
      } else {
        console.error("error al subir la imagen");
      }
    } catch (error) {
      console.error("Error al enviar la publicación:", error.message);
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const beforeUpload = (file) => {
    setImageSend(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
      setImagePreview(reader.result);
    };

    return false;
  };

  const handleChange = (info) => {
    if (info.file.status === "done") {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const isOkButtonDisabled = !description || !image;
  return (
    <div>
      {contextHolder}
      <Row gutter={15}>
        <Col>
          <Tooltip placement="top" color="blue" title={"Nueva publicación"}>
            <button
              style={{
                padding: "10px 15px 10px 15px",
                background: "white",
                border: "none",
                marginBottom: "15px",
                borderRadius: "6px",
                color: "blue",
                cursor: "pointer",
                opacity: ".8",
              }}
              onClick={showModal}
            >
              <FormOutlined style={{ fontSize: "20px" }}></FormOutlined>
            </button>
          </Tooltip>
        </Col>
        <Col>
          <Tooltip placement="top" color="purple" title={"Editar perfil"}>
            <button
              style={{
                padding: "10px 15px 10px 15px",
                background: "white",
                border: "none",
                marginBottom: "15px",
                borderRadius: "6px",
                color: "purple",
                cursor: "pointer",
                opacity: ".8",
              }}
            >
              <ProfileOutlined style={{ fontSize: "20px" }}></ProfileOutlined>
            </button>
          </Tooltip>
        </Col>
      </Row>
      <Modal
        title="Nueva Publicación"
        visible={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        okButtonProps={{ disabled: isOkButtonDisabled }}
      >
        <TextArea
          placeholder="Contenido"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <br />
        <Dragger
          name="file"
          multiple={false}
          beforeUpload={beforeUpload}
          showUploadList={false}
          onChange={handleChange}
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Vista previa de la imagen"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
          ) : (
            <>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">
                Haz clic o arrastra la imagen aquí
              </p>
            </>
          )}
        </Dragger>
      </Modal>
    </div>
  );
};

export default ButtonPublication;
