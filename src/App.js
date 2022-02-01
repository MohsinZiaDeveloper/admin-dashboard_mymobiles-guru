import { Outlet } from "react-router";
import "./App.css";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <Outlet />
      <ToastContainer />
    </div>
  );
}

export default App;
