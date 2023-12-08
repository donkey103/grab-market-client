import "./App.css";
import MainPageComponent from "./main";
import UploadPage from "./upload";
import ProudctPage from "./product";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route exact={true} path="/" element={<MainPageComponent />} />
        <Route exact={true} path="/products/:id" element={<ProudctPage />} />
        <Route exact={true} path="/upload" element={<UploadPage />} />
      </Routes>
    </div>
  );
}

export default App;
