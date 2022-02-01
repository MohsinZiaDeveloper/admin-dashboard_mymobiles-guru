import React from "react";
import { Login, AdmiMainScreen } from "./screens/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

const MyRoutes = () => (
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Login />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<AdmiMainScreen />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

export default MyRoutes;
