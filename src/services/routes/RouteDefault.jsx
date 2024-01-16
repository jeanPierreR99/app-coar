import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../containers/home/Login";
function RouteDefault() {
  return (
    <Routes>
       {/* <Route path="/" element={<Login />} /> */}
       <Route path="*" element={<Login />}></Route>
    </Routes>
  );
}

export default RouteDefault;
