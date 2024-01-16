import {
    SearchOutlined,
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    DownOutlined,
    MoreOutlined,
  } from "@ant-design/icons";
  import React, { useEffect, useRef, useState } from "react";
  import Highlighter from "react-highlight-words";
  import {
    Button,
    Input,
    Space,
    Table,
    Popconfirm,
    Modal,
    Menu,
    Dropdown,
  } from "antd";
  import axios from "axios";
import ModalAddTeacher from "./ModalAddTeacher";
  
  const TableTeacher = () => {
    const [getData, setData] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false); // Estado para controlar la apertura y cierre del modal
    const [selectedRowData, setSelectedRowData] = useState({});

    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = value => {
      const filtered = getData.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
      setSearchText(value);
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://jsonplaceholder.typicode.com/users"
          );
          setData(response.data);
        } catch (error) {
          console.error("error .......", error);
        }
      };
      fetchData();
    }, []);
  
  
    const showPopconfirm = (record) => {
      // setOpen(true);
      setOpen(record.key);
    };
  
    const handleOk = async (key) => {
      setConfirmLoading(true);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error(error);
      }
      setOpen(false);
      setConfirmLoading(false);
      success();
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
        title: "Nombre",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Código Postal",
        dataIndex: "address.zipcode",
        key: "address.zipcode",
        render: (text, record) => (
          <span>{record.address ? record.address.zipcode : "No disponible"}</span>
        ),
      },
  
      {
        title: "Correo",
        dataIndex: "email",
        key: "email",
        sorter: (a, b) => a.email.length - b.email.length,
        sortDirections: ["descend", "ascend"],
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
            <Button onClick={() => showPopconfirm(record)}>
              <MoreOutlined />
            </Button>
          </Dropdown>
        ),
        key: "Accion",
      },
    ];
  
    return (
      <div>
           <ModalAddTeacher title={"teacher"} onSearch={handleSearch}></ModalAddTeacher>
        <Table
          columns={columns}
          dataSource={filteredData.length > 0 ? filteredData : getData}

          rowKey="id"
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
                <th>Nombre</th>
                <td>{selectedRowData.name}</td>
              </tr>
              <tr>
                <th>Apellidos</th>
                <td>{selectedRowData.username}</td>
              </tr>
              <tr>
                <th>Correo</th>
                <td>{selectedRowData.email}</td>
              </tr>
              <tr>
                <th colSpan={2} style={{ textAlign: "center" }}>
                  Dirección
                </th>
              </tr>
              <tr>
                <th>Calle</th>
                <td>
                  {selectedRowData.address
                    ? selectedRowData.address.street
                    : "No disponible"}
                </td>
              </tr>
              <tr>
                <th>Suite</th>
                <td>
                  {selectedRowData.address
                    ? selectedRowData.address.suite
                    : "No disponlible"}
                </td>
              </tr>
              <tr>
                <th>Ciudad</th>
                <td>
                  {selectedRowData.address
                    ? selectedRowData.address.city
                    : "No disponlible"}
                </td>
              </tr>
              <tr>
                <th>zip doce</th>
                <td>
                  {selectedRowData.address
                    ? selectedRowData.address.zipcode
                    : "No disponible"}
                </td>
              </tr>
              <tr>
                <th>Telefono</th>
                <td>{selectedRowData.phone}</td>
              </tr>
              <tr>
                <th>Sitio web</th>
                <td>{selectedRowData.website}</td>
              </tr>
              <tr>
                <th colSpan={2} style={{ textAlign: "center" }}>
                  Compañia
                </th>
              </tr>
              <tr>
                <th>nombre</th>
                <td>
                  {selectedRowData.company
                    ? selectedRowData.company.name
                    : "No disponible"}
                </td>
              </tr>
              <tr>
                <th>catchPhrase</th>
                <td>
                  {selectedRowData.company
                    ? selectedRowData.company.catchPhrase
                    : "No disponible"}
                </td>
              </tr>
              <tr>
                <th>bs</th>
                <td>
                  {selectedRowData.company
                    ? selectedRowData.company.bs
                    : "No disponible"}
                </td>
              </tr>
            </tbody>
          </table>
        </Modal>
      </div>
    );
  };
  export default TableTeacher;
  