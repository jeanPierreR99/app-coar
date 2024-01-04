import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeContainer from "../../containers/HomeContainer";
import StudentContainer from "../../containers/StudentContainer";
import AdminContainer from "../../containers/AdminContainer";
function RouteDefault() {
  return (
    <Routes>
       <Route path="/" element={<HomeContainer />} />
       <Route path="/student" element={<StudentContainer />} />
       <Route path="/admin" element={<AdminContainer />} />
    </Routes>
  );
}

export default RouteDefault;
