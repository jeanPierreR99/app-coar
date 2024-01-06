import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../../containers/home/Login";
function RouteDefault() {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default RouteDefault;
