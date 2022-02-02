import React from "react";
import { Login, AdmiMainScreen, Create } from "./screens/index";
import { Outlet } from "react-router";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { SideNavbar } from "./components";

const MyRoutes = () => (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<SideNavbar />}>
            <Route index element={<AdmiMainScreen />} />
            <Route path="mobileDetail/:id" element={<Create />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

export default MyRoutes;
