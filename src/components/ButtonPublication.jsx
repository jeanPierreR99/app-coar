import { FormOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Tooltip,message, Space } from "antd";
import { useState } from "react";

const ButtonPublication = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Publicación agregada',
    });
  };
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
      success()
    }, 2000);
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };
  return (
    <div>
          {contextHolder}
      <Tooltip placement="top" title={"nueva publicación"}>
        <button
          style={{
            padding: "10px 15px 10px 15px",
            background: "white",
            border: "none",
            marginBottom: "15px",
            borderRadius: "6px",
            color: "blue",
            cursor: "pointer",
            opacity:".8"
          }}
          onClick={showModal}
        >
          <FormOutlined style={{ fontSize: "20px" }}></FormOutlined>
        </button>
      </Tooltip>
      <Modal
        title="Nueva Publicacion"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Input></Input>
        <Input></Input>
        <Input></Input>
        <Input></Input>
      </Modal>
    </div>
  );
};

export default ButtonPublication;
