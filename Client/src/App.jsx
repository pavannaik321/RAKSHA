import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import Doctor from "./pages/Doctor";
import { UserContextProvider } from "./context/userContext";
import Display from "./pages/Display";


// axios.defaults.baseURL = "https://raksha-five.vercel.app";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
    <UserContextProvider>

      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </UserContextProvider>
      </>
  );
}

export default App;