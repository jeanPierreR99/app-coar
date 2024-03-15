import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import FormAddStudent from './FormAddStudent';
import InputSearch from './InputSearch';
const ModalAddStudent = ({onSearch}) => {
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
        title="Registro de estudiante"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer=""
      >
        <FormAddStudent setOpen={setOpen} type="student"></FormAddStudent>
      </Modal>
    </>
  );
};
export default ModalAddStudent;