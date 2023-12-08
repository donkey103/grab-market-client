import "./App.css";
import MainPageComponent from "./main";
import UploadPage from "./upload";
import ProudctPage from "./product";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
function App() {
  // 6.0부터 useNavigate 사용으로 변경
  const navigate = useNavigate();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to={"/"}>
            <img src="/images/icons/logo.png" alt="" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              navigate("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Routes>
          <Route exact={true} path="/" element={<MainPageComponent />} />
          <Route exact={true} path="/products/:id" element={<ProudctPage />} />
          <Route exact={true} path="/upload" element={<UploadPage />} />
        </Routes>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
