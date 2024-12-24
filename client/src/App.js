import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./Authorisation/AuthProvider";
import TodoList from "./Pages/ToDoList";
import NewsPage from "./Pages/NewsPage";
import LearningCenter from "./Pages/Learnings";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/learn" element={<LearningCenter />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
