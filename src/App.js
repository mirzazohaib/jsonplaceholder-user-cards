import "./App.css";
import { HomePage } from "./components/HomePage";
import { Routes, Route } from "react-router-dom";
import { UserDetailPage } from "./components/UserDetailPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users/:userId" element={<UserDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
