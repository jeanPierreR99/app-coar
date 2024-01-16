import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import FormAddTeacher from './FormAddTeacher';
import InputSearch from './InputSearch';
const ModalAddTeacher = ({title, onSearch}) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false)
  };
  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };
  return (
    <>
    <div className='top-teacher'>
    <InputSearch onSearch={onSearch}></InputSearch>
    <Button type="primary" onClick={showModal}>
        +Nuevo
      </Button>
    </div>
      <Modal
        title="Registro de docente"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <FormAddTeacher></FormAddTeacher>
      </Modal>
    </>
  );
};
export default ModalAddTeacher;