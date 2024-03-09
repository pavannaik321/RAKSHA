import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Doctor from "./pages/Doctor";

axios.defaults.baseURL = "https://raksha-five.vercel.app";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor" element={<Doctor />} />
      </Routes>
      </>
  );
}

export default App;