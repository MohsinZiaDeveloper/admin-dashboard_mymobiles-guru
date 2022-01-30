import "./App.css";
import Folder from "./components/Folder";
import Login from "./screens/Login";
import explorer from "./data/FolderData";

function App() {
  return (
    <div className="App">
      {/* <Folder explorer={explorer} /> */}
      <Login />
    </div>
  );
}

export default App;
