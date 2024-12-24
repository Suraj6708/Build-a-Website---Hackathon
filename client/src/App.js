import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./Authorisation/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />

          <Route path="/" element={<Home />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
