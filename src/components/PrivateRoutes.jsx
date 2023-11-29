import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import EditProfile from "../pages/EditProfile";

function PrivateRoutes() {
  const { auth } = useAuth();
  console.log("Component Rendered");

  if (auth === undefined) return "loading...";
  return auth === true ? (
    <Outlet>
      <Home path="/" />
      <EditProfile path="/edit-profile" />
    </Outlet>
  ) : (
    <Navigate to="/auth" />
  );
}

export default PrivateRoutes;
