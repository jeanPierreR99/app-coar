import React, { useEffect, useRef, useState } from "react";
import ModalAddTeacher from "../../components/ModalAddTeacher";
import TableTeacher from "../../components/TableTeacher";

const AdminTeacher = () => {
  return (
    <div>
        <ModalAddTeacher title={"teacher"}></ModalAddTeacher>
        <TableTeacher></TableTeacher>
    </div>
  );
};
export default AdminTeacher;
