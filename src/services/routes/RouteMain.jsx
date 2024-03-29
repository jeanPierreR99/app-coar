import React, { useEffect, useState } from "react";
import RouteDefault from "./RouteDefault";
import RouteAdmin from "./RouteAdmin";
import { useLogin, useRole, useUser } from "../context/Context.provider";
import RouteStudent from "./RouteStudent";
import { ROLE } from "../../constants/Constants";

function RouteMain() {
  const { isLogin, setIsLogin } = useLogin();
  const { isAdmin, setIsAdmin } = useRole();
  const { setUserLog } = useUser();
  useEffect(() => {
    const storedRole = localStorage.getItem("user");
    const userStorageParse = JSON.parse(storedRole);
    if (userStorageParse) {
      setUserLog(userStorageParse)
      setIsLogin(true);
      if (userStorageParse.role == ROLE[0] || userStorageParse.role == ROLE[1]) {
        setIsAdmin(true);
      }
    }
  }, []);

  return isLogin && isAdmin ? (
    <RouteAdmin />
  ) : isLogin && !isAdmin ? (
    <RouteStudent />
  ) : (
    <RouteDefault />
  );
}

export default RouteMain;
