import React, { useEffect, useRef, useState } from "react";
import ModalAddTeacher from "../../components/ModalAddTeacher";
import TableTeacher from "../../components/TableTeacher";

const AdminTeacher = () => {
  return (
    <div style={{ padding: "20px" }}>
      <TableTeacher></TableTeacher>
    </div>
  );
};
export default AdminTeacher;
