import React, { useEffect, useState } from "react";
import RouteDefault from "./RouteDefault";
import RouteAdmin from "./RouteAdmin";
import { useLogin, useRole } from "../context/Context.provider"; 
import RouteStudent from "./RouteStudent";

function RouteMain() {
  const { isLogin, setIsLogin } = useLogin();
  const { isAdmin, setIsAdmin } = useRole();

  return isLogin && isAdmin? (
    <RouteAdmin />
  ) : isLogin && !isAdmin ? (
    <RouteStudent />
  ) : (
    <RouteDefault />
  );
}

export default RouteMain;
