import React, { useEffect, useRef, useState } from "react";
import ModalAddTeacher from "../../components/ModalAddTeacher";
import TableGalery from "../../components/TableGalery";

const AdminGalery = () => {
  return (
    <div>
    <ModalAddTeacher title={"galery"}></ModalAddTeacher>
    <TableGalery></TableGalery>
</div>
  );
};
export default AdminGalery;
