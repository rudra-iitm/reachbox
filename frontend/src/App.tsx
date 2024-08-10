import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Login from "./pages/Login";
import OneBox from "./pages/OneBox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onebox" element={<OneBox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
