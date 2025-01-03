import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegisterPage";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./Authorisation/AuthProvider";
import NewsPage from "./Pages/NewsPage";
import LearningCenter from "./Pages/Learnings";
import UserProfile from "./Pages/ProfilePage";
import VerticalRoadmap from "./Pages/Roadmap";
import YouTubeShorts from "./components/Shorts";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/learn" element={<LearningCenter />} />
          <Route path="/profiles" element={<UserProfile />} />
          <Route path="/road" element={<VerticalRoadmap />} />
          <Route path="/shorts" element={<YouTubeShorts />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
