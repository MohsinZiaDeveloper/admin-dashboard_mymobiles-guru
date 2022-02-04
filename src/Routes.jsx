import React from "react";
import { Login, AdmiMainScreen, Create } from "./screens/index";
import { Outlet } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { SideNavbar } from "./components";

const MyRoutes = () => (
  <React.StrictMode>
    <Provider store={store}>
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
    </Provider>
  </React.StrictMode>
);

export default MyRoutes;
