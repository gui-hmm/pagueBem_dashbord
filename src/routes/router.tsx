import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "../pages/login/login";
import Cadastro from "../pages/cadastro/cadastro";
import Home from "../pages/home/home";
import PrivateRoute from "../pages/login/auth/privateRoute";
import { AuthProvider } from "../pages/login/auth/authProvider";

function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export { AppRoutes };
