import React, { useEffect, useRef, useState } from "react";
import ModalAddTeacher from "../../components/ModalAddTeacher";
import TableStudent from "../../components/TableStudent";

const AdminStudent = () => {
  return (
    <div style={{ padding: "20px" }}>
      <TableStudent></TableStudent>
    </div>
  );
};
export default AdminStudent;
