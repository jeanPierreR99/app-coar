import React, { useEffect, useRef, useState } from "react";
import ChartLine from "../../components/ChartLine";
import ChartPieLot from "../../components/ChartPieLot";

const AdminHome = () => {
  return (
    <div className="content-home">
      <div style={{width:"90%"}}>
     <ChartLine  />
     </div>
     <div style={{width:"90%"}}>
     <ChartPieLot  />
     </div>
    </div>
  );
};
export default AdminHome;
