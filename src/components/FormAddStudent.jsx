import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
  Typography,
  message,
} from "antd";
import {
  createCollectionUser,
  createFileStorage,
} from "../services/firebase/Functions";
import Upload from "antd/es/upload/Upload";
import { UploadOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";
import { useUser } from "../services/context/Context.provider";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} es obligatorio!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const FormAddStudent = ({ setOpen, type }) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [form] = useForm();
  const { userLog} = useUser()

  const beforeUpload = (file) => {
    setImage(file);
    setImageName(file.name);
    return false;
  };

  const onFinish = async (values) => {
    try {
      if (!image) {
        message.error("Por favor, sube una imagen.");
        return;
      }
      const imageUrl = await createFileStorage(image, userLog);

      if (imageUrl) {
        if (createCollectionUser(type, values.user, imageUrl)) {
          setOpen(false);
          setImage(null);
          setImageName("");
          form.resetFields();
          message.success(`${type} registrado`);
        } else {
          message.error("error al agregar");
          console.error("error al subir la imagen");
        }
      } else {
        console.error("error al subir la imagen");
        message.error("error al cargar la imagen");
      }
    } catch (error) {
      console.error("Error al enviar la publicación:", error.message);
      message.error("erro al agregar");
    }
  };

  return (
    <Form
      form={form}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{
        maxWidth: 600,
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "user_dni"]}
        label="DNI"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "user_name"]}
        label="Nombres"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["user", "user_lastname"]} label="Apellidos">
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "user_url_avatar"]}
        label="Avatar"
        valuePropName="fileList"
        getValueFromEvent={() => null} // Esto evita que Ant Design maneje la carga
      >
        <Upload
          beforeUpload={beforeUpload}
          showUploadList={false} // No muestra la lista de archivos cargados automáticamente
        >
          <Button icon={<UploadOutlined />}>Seleccionar imagen</Button>
        </Upload>
        {imageName && (
          <Typography.Text type="success"> {imageName}</Typography.Text>
        )}
      </Form.Item>
      <Form.Item
        name={["user", "user_age"]}
        label="Edad"
        rules={[
          {
            type: "number",
            min: 0,
            max: 99,
          },
        ]}
      >
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["user", "user_password"]}
        label="Contraseña"
        rules={[
          {
            type: "password",
          },
        ]}
      >
        <Input type="password" />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 20,
        }}
      >
        <Button type="primary" htmlType="submit">
          Agregar
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormAddStudent;
