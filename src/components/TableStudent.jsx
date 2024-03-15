import {
  EyeOutlined,
  EditOutlined,
  DeleteOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import {
  Button,
  Table,
  Popconfirm,
  Modal,
  Menu,
  Dropdown,
  Image,
  Tag,
} from "antd";
import ModalAddStudent from "./ModalAddStudent";
import { useCollectionStudent } from "../services/context/Context.provider";
import { deleteCollection } from "../services/firebase/Functions";

const TableStudent = () => {
  const [searchText, setSearchText] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false); // Estado para controlar la apertura y cierre del modal
  const [selectedRowData, setSelectedRowData] = useState({});
  const { collectionStudent } = useCollectionStudent();

  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (value) => {
    const filtered = collectionStudent.filter((item) =>
      item.user_name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
    setSearchText(value);
  };

  const handleOk = async (key) => {
    console.log(key);
    setConfirmLoading(true);
    if (await deleteCollection("users", key.user_id)) {
      success();
      setConfirmLoading(false);
    } else {
      console.log("no existe el id");
    }
  };

  const success = () => {
    Modal.success({
      content: "Eliminado",
    });
  };

  const handleView = (record) => {
    setOpenModal(true);
    setSelectedRowData(record);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedRowData({});
  };

  const columns = [
    {
      title: "foto",
      dataIndex: "user_url_avatar",
      key: "user_url_avatar",
      render: (text, record) => (
        <Image
          key={record.url_avatar}
          width={40}
          height={40}
          style={{
            borderRadius: "50%",
          }}
          src={record.user_url_avatar}
        />
      ),
    },
    {
      title: "Nombres",
      dataIndex: "user_name",
      key: "user_name",
    },

    {
      title: "Apellidos",
      dataIndex: "user_lastname",
      key: "user_lastname",
      sorter: (a, b) => a.user_lastname.length - b.user_lastname.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "estado",
      dataIndex: "user_id",
      key: "user_id",
      render: (text, record) =>
        record.user_status == true ? (
          <Tag color="#87d068">Activo</Tag>
        ) : (
          <Tag color="#f50">Desactivado</Tag>
        ),
    },
    {
      title: "Acción",
      width: "5%",
      render: (text, record) => (
        <Dropdown
          trigger={"click"}
          overlay={
            <Menu>
              <Menu.Item key="1" onClick={() => handleView(record)}>
                <EyeOutlined /> Ver
              </Menu.Item>
              <Menu.Item key="2" onClick={() => handleEdit(record)}>
                <EditOutlined /> Editar
              </Menu.Item>
              <Menu.Item key="3" style={{ color: "red" }}>
                <Popconfirm
                  title="¿Seguro que desea eliminar?"
                  onConfirm={() => handleOk(record)}
                  okButtonProps={{
                    style: { background: "red" },
                  }}
                  okText={confirmLoading ? "Eliminando..." : "Sí"}
                >
                  <a>
                    {confirmLoading ? "Eliminando..." : <DeleteOutlined />}{" "}
                    Eliminar
                  </a>
                </Popconfirm>
              </Menu.Item>
            </Menu>
          }
        >
          <Button>
            <MoreOutlined />
          </Button>
        </Dropdown>
      ),
      key: "Accion",
    },
  ];

  return (
    <div>
      <ModalAddStudent onSearch={handleSearch}></ModalAddStudent>
      <Table
        columns={columns}
        dataSource={filteredData.length > 0 ? filteredData : collectionStudent}
        rowKey={(record) => record.user_id}
        scroll={{
          x: "auto",
        }}
      />
      <Modal
        title="Características"
        open={openModal}
        onCancel={handleCloseModal}
        footer={[
          <Button key="close" onClick={handleCloseModal}>
            Cerrar
          </Button>,
        ]}
      >
        <table className="tableDescription">
          <tbody>
            <tr>
              <td>{selectedRowData && selectedRowData.user_name}</td>
            </tr>
            <tr>
              <td>{selectedRowData && selectedRowData.user_lastname}</td>
            </tr>
            <tr>
              <td>{selectedRowData && selectedRowData.user_url_avatar}</td>
            </tr>
            <tr>
              <td>{selectedRowData && selectedRowData.user_id}</td>
            </tr>
            <tr>
              <td>{selectedRowData && selectedRowData.user_dni}</td>
            </tr>
            <tr>
              <td>{selectedRowData && selectedRowData.user_especialidad}</td>
            </tr>
            <tr>
              <td>{selectedRowData && selectedRowData.user_age}</td>
            </tr>
          </tbody>
        </table>
      </Modal>
    </div>
  );
};
export default TableStudent;
